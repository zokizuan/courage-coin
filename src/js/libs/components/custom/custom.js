export function initDeviceWidthManager(dynamicClass) {
  return {
      classList: '',
      mobileWidth: 768, // Adjust this value based on your mobile breakpoint
      customClass: dynamicClass,

    init() {
        console.log('init')
          this.updateClassList();
          window.addEventListener('resize', () => {
              this.updateClassList();
          });
      },

    updateClassList() {
      console.log('update')
          if (window.innerWidth >= this.mobileWidth) {
              this.classList = this.customClass;
          } else {
              this.classList = '';
          }
      }
  };
}