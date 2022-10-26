import { STORAGE } from './consts';

export const isSignedIn = () => JSON.parse(localStorage.getItem(STORAGE.isSignedIn));
export const getAccountType = () => localStorage.getItem(STORAGE.accountType);
export const isAdmin = () => localStorage.getItem(STORAGE.accountType) === 'admin';
export const isEmployer = () => localStorage.getItem(STORAGE.accountType) === 'employer';
export const isJobSeeker = () => localStorage.getItem(STORAGE.accountType) === 'jobseeker';
export const getEmailId = () => localStorage.getItem(STORAGE.emailId);
export const getUserInfo = () => JSON.parse(localStorage.getItem(STORAGE.details));
export const getUserId = () => localStorage.getItem(STORAGE.userId);
export const getCompanyId = () => localStorage.getItem(STORAGE.companyId);
export const setCompanyId = (companyId) => localStorage.setItem(STORAGE.companyId,companyId);


export const setLogin = (info) => {
  localStorage.setItem(STORAGE.isSignedIn,true);
  localStorage.setItem(STORAGE.accountType,info.user.accountType);
  localStorage.setItem(STORAGE.emailId,info.user.emailId);
  localStorage.setItem(STORAGE.token,info.token);
  localStorage.setItem(STORAGE.companyId, info.user.companyId);
  localStorage.setItem(STORAGE.userId,info.user._id);
  localStorage.setItem(STORAGE.details, JSON.stringify(info.user));
}