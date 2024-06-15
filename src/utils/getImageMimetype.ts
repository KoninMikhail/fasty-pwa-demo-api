const getImageMimetype = (extension: string): string => {
  switch (extension.toLowerCase()) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    default:
      return '';
  }
};

export default getImageMimetype;
