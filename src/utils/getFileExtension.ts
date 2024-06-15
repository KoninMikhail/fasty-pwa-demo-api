const getFileExtension = (filename: string): string => {
  const lastIndex = filename.lastIndexOf('.');

  if (lastIndex < 0) {
    return ''; // No extension found
  }

  return filename.substring(lastIndex + 1);
};

export default getFileExtension;
