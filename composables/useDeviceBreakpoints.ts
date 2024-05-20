export const useDeviceBreakpoints = () => {
  const { smaller } = useBreakpoints({ mobile: 1024 });

  const displays = {
    mobile: smaller("mobile"),
  };

  return displays;
};
