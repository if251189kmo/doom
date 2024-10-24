import { useCallback, useEffect } from 'react';
import { useAppSelector } from '../../../hooks/useRedux';
import { getProgress } from '../redux/selectors';
import { ProgressProps } from '../types';

export const useProgressLogic = (loading: ProgressProps['loading']) => {
  const isCommonProgress = useAppSelector(getProgress());
  const isLoading = isCommonProgress || loading;

  const toggleScroll = useCallback((enableScroll: boolean) => {
    const body = document.querySelector('body') as HTMLElement;
    const indecator = body.querySelector('#indecator') as HTMLElement;
    const scrollTop = window.scrollY;

    if (indecator) indecator.style.marginTop = `${scrollTop}px`;
    if (enableScroll) body.style.overflow = 'auto';
    else body.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    toggleScroll(!isLoading);
    return () => {
      toggleScroll(true);
    };
  }, [toggleScroll, isLoading]);

  return { isLoading };
};
