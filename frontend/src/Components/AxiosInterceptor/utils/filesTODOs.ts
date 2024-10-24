import { AxiosResponse } from 'axios';

const extractFileName = (contentDisposition?: string, defName?: string) => {
  if (contentDisposition && !defName) {
    const matches = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
    if (matches) return decodeURIComponent(matches[1].replace(/['"]/g, ''));
  }
  return defName || 'downloadFile';
};

const fileDownload = ({ headers, data }: AxiosResponse, name?: string) => {
  const contentDisposition = headers['content-disposition'];

  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', extractFileName(contentDisposition, name));
  document.body.appendChild(link);
  link.click();
  link.remove();
};
export { fileDownload };
