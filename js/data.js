import {fetchByUrl} from './api.js';
let newConfirmedCases = {
    'text' : 'New Confirmed Cases',
    'icon' : 'mdi mdi-account-multiple',
    'bg' : 'bg-primary-light',
    "key": "NewConfirmed",
}
let tCcases = {
    'text' : 'Total Confirmed Cases',
    'icon' : 'mdi mdi-car',
    'bg' : 'bg-warning-light',
    "key": "TotalConfirmed",
}
let ndeaths = {
    'text' : 'New Deaths',
    'icon' : 'mdi-sale',
    'bg' : 'bg-info-light',
    "key": "NewDeaths"
}
let tdeaths = {
    'text' : 'Total Deaths',
    'icon' : 'mdi mdi-phone-incoming',
    'bg' : 'bg-danger-light',
    "key": "TotalDeaths",
}
let nrecovered = {
    'text' : 'New Recovered',
    'icon' : 'mdi mdi-phone-outgoing',
    'bg' : 'bg-success-light',
    'key' : 'NewRecovered'
}
let trecovered = {
    'text' : 'Total Recovered',
    'icon' : 'mdi-chart-line',
    'bg' : 'bg-light',
    "key": "TotalRecovered"
}
let headerInfo = [newConfirmedCases,tCcases,ndeaths,tdeaths,nrecovered,trecovered];

document.addEventListener("DOMContentLoaded", () => {
    let data =  fetchByUrl('https://api.covid19api.com/summary', function(data){
    let global = data.Global;
    var headerTileElem = '';
    headerInfo.forEach((item, index, array) => {
        headerTileElem += `<div class="col-xl-2 col-6">
                    <div class="box overflow-hidden pull-up">
                        <div class="box-body">							
                            <div class="icon ${item.bg} rounded w-60 h-60">
                                <i class="text-primary mr-0 font-size-24 ${item.icon}"></i>
                            </div>
                            <div>
                                <p class="text-mute mt-20 mb-0 font-size-16">${item.text} </p>
                                <h3 class="text-white mb-0 font-weight-500">${global[item.key]} <small class="text-success"><i class="fa fa-caret-up"></i> +2.5%</small></h3>
                            </div>
                        </div>
                    </div>
                </div>`;
    });
    document.querySelector('#header-tile').innerHTML = headerTileElem;

   })

   
});
