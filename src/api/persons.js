import api from '@/api'
export function getPersons(that) {
    let idContent = 943
    let url = 'https://cdnapi.smotrim.ru/api/v1/boxes/vesti2'
    api.get(url).then(res => {
        let contentData = res.data.data.content.find(el => el.id === idContent) 
        that.persons = contentData.content;
    }).catch(err => {
        console.log(err);
    }).finally(() => {
        setTimeout(() => {
            that.isLoading = false;
        }, 500)
    });
}