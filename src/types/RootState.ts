import { UserManagementState } from 'app/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  userManagement?: UserManagementState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
