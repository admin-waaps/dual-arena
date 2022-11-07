import ApiService from "./api.service";
import UtilityService from "./utility.service";

const apiService = new ApiService();
const utilityService = new UtilityService();

export default class NetworkService {

    constructor() { }


    login(data){
        return "ABCD";
    }

    register(data){
        return this.axiosPostResponse('register', data);
    }



    axiosGetResponse(key, id = null, showLoader = false, showError = true, contentType = 'application/json') {
        return this.httpResponse('get', key, {}, id, showLoader, showError, contentType);
    }

    axiosPostResponse(key, data, id = null, showLoader = false, showError = true, contentType = 'application/json') {
        return this.httpResponse('post', key, data, id, showLoader, showError, contentType);
    }


    axiosPatchResponse(key, data, id = null, showloader = false, showError = true, contenttype = 'application/json') {
        return this.httpResponse('patch', key, data, id, showloader, showError, contenttype);
    }

    axiosDeleteResponse(key, id = null, showloader = false, showError = true, contentType = 'application/json') {
        return this.httpResponse('delete', key, {}, id, showloader, showError, contentType);
    }




    httpResponse(type = 'get', key, data, id = null, showLoader = false, showError = true, contentType = 'application/json') {

        return new Promise((resolve, reject) => {

            if (showLoader == true) {
                utilityService.showLoader();
            }

            const _id = (id) ? '/' + id : '';
            const url = key + _id;

            let headers = {
                'content-type': contentType,
            }

            const seq = (type == 'get') ? apiService.get(url) : ((type == 'patch') ? apiService.patch(url, data) : ((type == 'delete') ? apiService.delete(url) : apiService.post(url, data, headers)));

            seq.then((res) => {
                if (res.status != 200) {
                    if (showError == true) {
                        if (res.status != 401) {
                            utilityService.presentFailureToast(res['message']);
                        }
                    }

                    if (res.status == 401) {
                        // redirect it to login page
                        this.$router.push({ path: 'login', query: {} });

                    }

                    reject(null);
                    return;
                }

                resolve(res.data);


            }, (err) => {

                let error = err;

                if (showLoader == true) {
                    utilityService.hideLoader();
                }

                if (showError == true) {
                    if (err.status != 401) {
                        utilityService.presentFailureToast(err['message']);
                    }
                }

                if (err.status == 401) {
                    // redirect it to login page

                    this.$router.push({ path: '/', query: {} });
                }

                reject(err);

            }).catch((err) => {
                console.log(err, "CATCH FROM NETWORK");
            })

        });

    }
}
