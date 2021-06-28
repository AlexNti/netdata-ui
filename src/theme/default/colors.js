import rawColors from "../rawColors"

const appColors = {
  primary: rawColors.green.netdata,
  accent: rawColors.green.chateau,
  main: rawColors.neutral.limedSpruce,
  border: rawColors.neutral.regentgrey,
  borderSecondary: rawColors.neutral.porcelain,
  tabsBorder: rawColors.neutral.iron,
  disabled: rawColors.neutral.porcelain,
  disabledBackground: rawColors.neutral.porcelain,
  dropdown: rawColors.neutral.white,
  elementBackground: rawColors.neutral.blackhaze,
  elementBackgroundHover: rawColors.neutral.white,
  mainBackground: rawColors.neutral.white,
  mainBackgroundDisabled: rawColors.neutral.blackhaze,
  modalHeaderBackground: rawColors.neutral.shark,
  modalTabsBackground: rawColors.neutral.blackhaze,
  modalBackground: rawColors.neutral.white,
  modalInfoBackground: rawColors.neutral.blackhaze,
  success: rawColors.green.netdata,
  successLite: rawColors.green.deyork,
  warning: rawColors.yellow.amber,
  warningLite: rawColors.yellow.mustard,
  warningBackground: rawColors.yellow.ginfizz,
  warningText: rawColors.yellow.seaBuckthorn,
  error: rawColors.red.pomegranate,
  errorLite: rawColors.red.apricot,
  errorBackground: rawColors.red.lavender,
  errorText: rawColors.red.pomegranate,
  attention: rawColors.purple.mauve,
  attentionSecondary: rawColors.purple.daisy,
  separator: rawColors.neutral.bluebayoux,
  controlFocused: rawColors.neutral.limedSpruce,
  selected: rawColors.neutral.iron,
  tooltip: rawColors.neutral.shark,
  bright: rawColors.neutral.white,
  text: rawColors.neutral.limedSpruce,
  textLite: rawColors.neutral.regentgrey,
  textFocus: rawColors.neutral.regentgrey,
  textDescription: rawColors.neutral.bluebayoux,
  sectionHeaderBackground: rawColors.neutral.limedSpruce,
  placeholder: rawColors.neutral.iron,
  key: rawColors.neutral.regentgrey,
  panel: rawColors.neutral.limedSpruce,
}

export default {
  ...appColors,
  ...rawColors,
}
