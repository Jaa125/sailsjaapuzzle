import { useState, useEffect } from 'react';

const useCheckURL = (url) => {
  const [isFacebook, setIsFacebook] = useState(false);
  const [isInstagram, setIsInstagram] = useState(false);

  useEffect(() => {
    if (url.includes('facebook.com')) {
      setIsFacebook(true);
    } else if (url.includes('instagram.com')) {
      setIsInstagram(true);
    }
  }, [url]);

  return [isFacebook, isInstagram];
};

export default useCheckURL;