const textOmit = (textValue: string, to: number, from: number) => {
  /**
   * 实现功能
   * 将地址缩短 使用 ... 进行拼接
   * 如下效果
   * 0x0171...fB15d680
   */
  const a = textValue.substring(0, to);
  const a2 = textValue.substring(textValue.length - from, textValue.length);
  return `${a}...${a2}`;
};

export default textOmit;
