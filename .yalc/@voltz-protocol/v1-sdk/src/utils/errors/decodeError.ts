import { getReadableErrorMessage } from './errorHandling';

const error = {
  data: "Reverted 0x08c379a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000246f6e6c79206d73672e73656e646572206f7220617070726f7665642063616e206d696e7400000000000000000000000000000000000000000000000000000000",
};

console.log(getReadableErrorMessage(error, 'KOVAN'));