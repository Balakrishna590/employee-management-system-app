import { environment } from "../../environments/environment";

export const webServiceBaseUrl = environment.apiUrl;

export const securityLoginUrl = webServiceBaseUrl + "/auth/login";
export const userRegistrationUrl = webServiceBaseUrl + "/auth/register";

export const fetchAllManagerEmployeesUrl = webServiceBaseUrl + "/common/getAllManagerEmployees"

