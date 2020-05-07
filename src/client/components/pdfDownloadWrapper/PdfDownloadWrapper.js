import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@rc-lib-client/components/inputs/button/Button';
import ScaleLoader from '@rc-lib-client/components/loaders/scaleLoader/ScaleLoader';
import styles from './pdfDownloadWrapper.scss';

function PdfDownloadWrapper({
  className,
  pageClassNameId,
  children,
  childrenContainerClassName,
  buttonClassName,
  downloadButtonLabel = 'DOWNLOAD PDF',
  filename = 'page.pdf',
  imageType = 'jpeg',
  imageQuality = 0.98,
  enableLinks = true,
  html2canvas = {
    scale: 2,
    useCORS: true,
    letterRendering: true,
  },
  jsPDF = { unit: 'mm', format: 'a4', orientation: 'landscape' },
  LoaderComponent,
}) {
  const pdfContent = useRef(null);
  const [isDownloading, setDownloading] = useState(false);

  const onDownloadPdf = () => {
    setDownloading(true);

    const opt = {
      margin: 0,
      enableLinks: enableLinks,
      filename: filename,
      image: { type: imageType, quality: imageQuality },
      html2canvas: html2canvas,
      jsPDF: jsPDF,
    };

    saveMultiPagePdf(opt).then(() => {
      setDownloading(false);
    });
  };

  const saveMultiPagePdf = (opt) => {
    // To avoid blank pages in the pdf we need to manually add the divs
    // See issue https://github.com/eKoopmans/html2pdf.js/issues/19
    const html2pdf = require('html2pdf.js');

    const domElementCollection = pageClassNameId
      ? document.getElementsByClassName(pageClassNameId)
      : pdfContent.current.children;

    const domPages = [...domElementCollection].map((htmlElement) => {
      return htmlElement.outerHTML;
    });

    let worker = html2pdf()
      .from(domPages[0])
      .set(opt)
      .toPdf();

    domPages.slice(1).forEach((page) => {
      worker = worker
        .get('pdf')
        .then((pdf) => {
          pdf.addPage();
        })
        .from(page)
        .toContainer()
        .toCanvas()
        .toPdf();
    });

    return worker.save();
  };

  return (
    <div className={classNames(styles.pdfDownloadWrapper, className)}>
      <Button
        className={classNames(styles.saveBtn, buttonClassName)}
        label={downloadButtonLabel}
        onClick={onDownloadPdf}
        startIcon={
          isDownloading &&
          (LoaderComponent ? (
            LoaderComponent
          ) : (
            <ScaleLoader color={'#1d1d1d'} />
          ))
        }
        labelClassName={classNames(isDownloading && styles.hideOnLoading)}
        disabled={isDownloading}
      />
      <div
        ref={pdfContent}
        className={classNames(
          styles.pdfParticipantsPreview,
          childrenContainerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

PdfDownloadWrapper.propTypes = {
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  childrenContainerClassName: PropTypes.string,
  pageClassNameId: PropTypes.string, // Specific page break classname. Used if children doesnt follow this pattern <React.Fragment> <div/><div/> </React.Fragment>
  downloadButtonLabel: PropTypes.string,
  filename: PropTypes.string,
  imageType: PropTypes.string,
  imageQuality: PropTypes.number,
  html2canvas: PropTypes.object,
  jsPDF: PropTypes.object,
  enableLinks: PropTypes.bool,
  LoaderComponent: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
};

export default React.memo(PdfDownloadWrapper);
