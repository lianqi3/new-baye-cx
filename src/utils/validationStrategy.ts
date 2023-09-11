import { Toast } from 'antd-mobile';

type ValidationStrategy = (value: string, amount: number) => string | null;

const isStatusValidation: ValidationStrategy = (value) => {
  if (!value) {
    return '0';
  }
  return null;
};

const isEmptyValidation: ValidationStrategy = (value) => {
  if (value === '') {
    return '1';
  }
  return null;
};

const isNegativeValidation: ValidationStrategy = (value) => {
  if (Number(value) <= 0) {
    return '2';
  }
  return null;
};
const isMinValidation: ValidationStrategy = (value, amount) => {
  if (Number(value) < amount) {
    return '3';
  }
  return null;
};
const isMaxValidation: ValidationStrategy = (value, amount) => {
  if (Number(value) > amount) {
    return '4';
  }
  return null;
};

const isInsufficientBalanceValidation: ValidationStrategy = (value, amount) => {
  if (Number(value) > amount) {
    return '5';
  }
  return null;
};

const validate = (
  value: string,
  amount: number,
  strategy: ValidationStrategy,
  t: (key: string) => string,
  errorMessages: { [key: string]: string },
): boolean => {
  const errorKey = strategy(value, amount);
  if (errorKey) {
    const errorMessage = errorMessages[errorKey];
    Toast.show({
      content: t(errorMessage),
    });
    return false;
  }
  return true;
};

export default validate;

// 调用示例：
// const value = '10'; // 外部传入的 value
// const amount = 100; // 外部传入的 amount
// const t = (key: string) => 'Translated message'; // 外部传入的翻译函数
// const errorMessages = {
//   zhiYaJinebuNengXiaoYu_0: 'Amount cannot be less than or equal to 0',
//   yuebuZu: 'Insufficient balance',
// };

// validate(value, amount, isStatusValidation, t, errorMessages); // 执行开关验证
// validate(value, amount, isEmptyValidation, t, errorMessages); // 执行空验证
// validate(value, amount, isNegativeValidation, t, errorMessages); // 执行小于0验证
// validate(value, amount, isInsufficientBalanceValidation, t, errorMessages); // 执行余额不足验证
// validate(value, amount, isMinValidation, t, errorMessages); // 执行最小值验证
// validate(value, amount, isMaxValidation, t, errorMessages); // 执行最大值验证
