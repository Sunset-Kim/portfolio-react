import { useState } from 'react';

const useTab = (index: number, Tabs: string[]) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  return {
    currentItem: Tabs[currentIndex],
    changeItem: setCurrentIndex
  }
}

export default useTab;