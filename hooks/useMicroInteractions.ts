'use client';

import { useState, useCallback } from 'react';

/**
 * Hook for managing micro-interactions
 * Provides hover, focus, and click state management
 */
export function useMicroInteractions() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsPressed(false);
  }, []);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsPressed(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsPressed(false);
  }, []);

  return {
    isHovered,
    isFocused,
    isPressed,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
    },
  };
}

/**
 * Hook for button micro-interactions
 */
export function useButtonInteraction() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const startLoading = useCallback(() => {
    setIsLoading(true);
    setIsSuccess(false);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const showSuccess = useCallback(() => {
    setIsSuccess(true);
    setIsLoading(false);
    setTimeout(() => setIsSuccess(false), 2000);
  }, []);

  return {
    isLoading,
    isSuccess,
    startLoading,
    stopLoading,
    showSuccess,
  };
}
