import React from 'react';
import GuestLayout from './guest-layout';
import localStyles from './local-styles.css';
import Select from 'react-select';
import CatDog from '../resources/img/phil.jpeg';
import LeftUserColumn from './left-user-column';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import { formatDate, parseDate } from 'react-day-picker/moment';

const countries = [
  {"id":4,"name":"Afghanistan","alpha2":"af","alpha3":"afg"},
  {"id":8,"name":"Albania","alpha2":"al","alpha3":"alb"},
  {"id":12,"name":"Algeria","alpha2":"dz","alpha3":"dza"},
  {"id":20,"name":"Andorra","alpha2":"ad","alpha3":"and"},
  {"id":24,"name":"Angola","alpha2":"ao","alpha3":"ago"},
  {"id":28,"name":"Antigua and Barbuda","alpha2":"ag","alpha3":"atg"},
  {"id":32,"name":"Argentina","alpha2":"ar","alpha3":"arg"},
  {"id":51,"name":"Armenia","alpha2":"am","alpha3":"arm"},
  {"id":36,"name":"Australia","alpha2":"au","alpha3":"aus"},
  {"id":40,"name":"Austria","alpha2":"at","alpha3":"aut"},
  {"id":31,"name":"Azerbaijan","alpha2":"az","alpha3":"aze"},
  {"id":44,"name":"Bahamas","alpha2":"bs","alpha3":"bhs"},
  {"id":48,"name":"Bahrain","alpha2":"bh","alpha3":"bhr"},
  {"id":50,"name":"Bangladesh","alpha2":"bd","alpha3":"bgd"},
  {"id":52,"name":"Barbados","alpha2":"bb","alpha3":"brb"},
  {"id":112,"name":"Belarus","alpha2":"by","alpha3":"blr"},
  {"id":56,"name":"Belgium","alpha2":"be","alpha3":"bel"},
  {"id":84,"name":"Belize","alpha2":"bz","alpha3":"blz"},
  {"id":204,"name":"Benin","alpha2":"bj","alpha3":"ben"},
  {"id":64,"name":"Bhutan","alpha2":"bt","alpha3":"btn"},
  {"id":68,"name":"Bolivia (Plurinational State of)","alpha2":"bo","alpha3":"bol"},
  {"id":70,"name":"Bosnia and Herzegovina","alpha2":"ba","alpha3":"bih"},
  {"id":72,"name":"Botswana","alpha2":"bw","alpha3":"bwa"},
  {"id":76,"name":"Brazil","alpha2":"br","alpha3":"bra"},
  {"id":96,"name":"Brunei Darussalam","alpha2":"bn","alpha3":"brn"},
  {"id":100,"name":"Bulgaria","alpha2":"bg","alpha3":"bgr"},
  {"id":854,"name":"Burkina Faso","alpha2":"bf","alpha3":"bfa"},
  {"id":108,"name":"Burundi","alpha2":"bi","alpha3":"bdi"},
  {"id":132,"name":"Cabo Verde","alpha2":"cv","alpha3":"cpv"},
  {"id":116,"name":"Cambodia","alpha2":"kh","alpha3":"khm"},
  {"id":120,"name":"Cameroon","alpha2":"cm","alpha3":"cmr"},
  {"id":124,"name":"Canada","alpha2":"ca","alpha3":"can"},
  {"id":140,"name":"Central African Republic","alpha2":"cf","alpha3":"caf"},
  {"id":148,"name":"Chad","alpha2":"td","alpha3":"tcd"},
  {"id":152,"name":"Chile","alpha2":"cl","alpha3":"chl"},
  {"id":156,"name":"China","alpha2":"cn","alpha3":"chn"},
  {"id":170,"name":"Colombia","alpha2":"co","alpha3":"col"},
  {"id":174,"name":"Comoros","alpha2":"km","alpha3":"com"},
  {"id":178,"name":"Congo","alpha2":"cg","alpha3":"cog"},
  {"id":180,"name":"Congo, Democratic Republic of the","alpha2":"cd","alpha3":"cod"},
  {"id":188,"name":"Costa Rica","alpha2":"cr","alpha3":"cri"},
  {"id":384,"name":"Côte d'Ivoire","alpha2":"ci","alpha3":"civ"},
  {"id":191,"name":"Croatia","alpha2":"hr","alpha3":"hrv"},
  {"id":192,"name":"Cuba","alpha2":"cu","alpha3":"cub"},
  {"id":196,"name":"Cyprus","alpha2":"cy","alpha3":"cyp"},
  {"id":203,"name":"Czechia","alpha2":"cz","alpha3":"cze"},
  {"id":208,"name":"Denmark","alpha2":"dk","alpha3":"dnk"},
  {"id":262,"name":"Djibouti","alpha2":"dj","alpha3":"dji"},
  {"id":212,"name":"Dominica","alpha2":"dm","alpha3":"dma"},
  {"id":214,"name":"Dominican Republic","alpha2":"do","alpha3":"dom"},
  {"id":218,"name":"Ecuador","alpha2":"ec","alpha3":"ecu"},
  {"id":818,"name":"Egypt","alpha2":"eg","alpha3":"egy"},
  {"id":222,"name":"El Salvador","alpha2":"sv","alpha3":"slv"},
  {"id":226,"name":"Equatorial Guinea","alpha2":"gq","alpha3":"gnq"},
  {"id":232,"name":"Eritrea","alpha2":"er","alpha3":"eri"},
  {"id":233,"name":"Estonia","alpha2":"ee","alpha3":"est"},
  {"id":748,"name":"Eswatini","alpha2":"sz","alpha3":"swz"},
  {"id":231,"name":"Ethiopia","alpha2":"et","alpha3":"eth"},
  {"id":242,"name":"Fiji","alpha2":"fj","alpha3":"fji"},
  {"id":246,"name":"Finland","alpha2":"fi","alpha3":"fin"},
  {"id":250,"name":"France","alpha2":"fr","alpha3":"fra"},
  {"id":266,"name":"Gabon","alpha2":"ga","alpha3":"gab"},
  {"id":270,"name":"Gambia","alpha2":"gm","alpha3":"gmb"},
  {"id":268,"name":"Georgia","alpha2":"ge","alpha3":"geo"},
  {"id":276,"name":"Germany","alpha2":"de","alpha3":"deu"},
  {"id":288,"name":"Ghana","alpha2":"gh","alpha3":"gha"},
  {"id":300,"name":"Greece","alpha2":"gr","alpha3":"grc"},
  {"id":308,"name":"Grenada","alpha2":"gd","alpha3":"grd"},
  {"id":320,"name":"Guatemala","alpha2":"gt","alpha3":"gtm"},
  {"id":324,"name":"Guinea","alpha2":"gn","alpha3":"gin"},
  {"id":624,"name":"Guinea-Bissau","alpha2":"gw","alpha3":"gnb"},
  {"id":328,"name":"Guyana","alpha2":"gy","alpha3":"guy"},
  {"id":332,"name":"Haiti","alpha2":"ht","alpha3":"hti"},
  {"id":340,"name":"Honduras","alpha2":"hn","alpha3":"hnd"},
  {"id":348,"name":"Hungary","alpha2":"hu","alpha3":"hun"},
  {"id":352,"name":"Iceland","alpha2":"is","alpha3":"isl"},
  {"id":356,"name":"India","alpha2":"in","alpha3":"ind"},
  {"id":360,"name":"Indonesia","alpha2":"id","alpha3":"idn"},
  {"id":364,"name":"Iran (Islamic Republic of)","alpha2":"ir","alpha3":"irn"},
  {"id":368,"name":"Iraq","alpha2":"iq","alpha3":"irq"},
  {"id":372,"name":"Ireland","alpha2":"ie","alpha3":"irl"},
  {"id":376,"name":"Israel","alpha2":"il","alpha3":"isr"},
  {"id":380,"name":"Italy","alpha2":"it","alpha3":"ita"},
  {"id":388,"name":"Jamaica","alpha2":"jm","alpha3":"jam"},
  {"id":392,"name":"Japan","alpha2":"jp","alpha3":"jpn"},
  {"id":400,"name":"Jordan","alpha2":"jo","alpha3":"jor"},
  {"id":398,"name":"Kazakhstan","alpha2":"kz","alpha3":"kaz"},
  {"id":404,"name":"Kenya","alpha2":"ke","alpha3":"ken"},
  {"id":296,"name":"Kiribati","alpha2":"ki","alpha3":"kir"},
  {"id":408,"name":"Korea (Democratic People's Republic of)","alpha2":"kp","alpha3":"prk"},
  {"id":410,"name":"Korea, Republic of","alpha2":"kr","alpha3":"kor"},
  {"id":414,"name":"Kuwait","alpha2":"kw","alpha3":"kwt"},
  {"id":417,"name":"Kyrgyzstan","alpha2":"kg","alpha3":"kgz"},
  {"id":418,"name":"Lao People's Democratic Republic","alpha2":"la","alpha3":"lao"},
  {"id":428,"name":"Latvia","alpha2":"lv","alpha3":"lva"},
  {"id":422,"name":"Lebanon","alpha2":"lb","alpha3":"lbn"},
  {"id":426,"name":"Lesotho","alpha2":"ls","alpha3":"lso"},
  {"id":430,"name":"Liberia","alpha2":"lr","alpha3":"lbr"},
  {"id":434,"name":"Libya","alpha2":"ly","alpha3":"lby"},
  {"id":438,"name":"Liechtenstein","alpha2":"li","alpha3":"lie"},
  {"id":440,"name":"Lithuania","alpha2":"lt","alpha3":"ltu"},
  {"id":442,"name":"Luxembourg","alpha2":"lu","alpha3":"lux"},
  {"id":807,"name":"Macedonia, the former Yugoslav Republic of","alpha2":"mk","alpha3":"mkd"},
  {"id":450,"name":"Madagascar","alpha2":"mg","alpha3":"mdg"},
  {"id":454,"name":"Malawi","alpha2":"mw","alpha3":"mwi"},
  {"id":458,"name":"Malaysia","alpha2":"my","alpha3":"mys"},
  {"id":462,"name":"Maldives","alpha2":"mv","alpha3":"mdv"},
  {"id":466,"name":"Mali","alpha2":"ml","alpha3":"mli"},
  {"id":470,"name":"Malta","alpha2":"mt","alpha3":"mlt"},
  {"id":584,"name":"Marshall Islands","alpha2":"mh","alpha3":"mhl"},
  {"id":478,"name":"Mauritania","alpha2":"mr","alpha3":"mrt"},
  {"id":480,"name":"Mauritius","alpha2":"mu","alpha3":"mus"},
  {"id":484,"name":"Mexico","alpha2":"mx","alpha3":"mex"},
  {"id":583,"name":"Micronesia (Federated States of)","alpha2":"fm","alpha3":"fsm"},
  {"id":498,"name":"Moldova, Republic of","alpha2":"md","alpha3":"mda"},
  {"id":492,"name":"Monaco","alpha2":"mc","alpha3":"mco"},
  {"id":496,"name":"Mongolia","alpha2":"mn","alpha3":"mng"},
  {"id":499,"name":"Montenegro","alpha2":"me","alpha3":"mne"},
  {"id":504,"name":"Morocco","alpha2":"ma","alpha3":"mar"},
  {"id":508,"name":"Mozambique","alpha2":"mz","alpha3":"moz"},
  {"id":104,"name":"Myanmar","alpha2":"mm","alpha3":"mmr"},
  {"id":516,"name":"Namibia","alpha2":"na","alpha3":"nam"},
  {"id":520,"name":"Nauru","alpha2":"nr","alpha3":"nru"},
  {"id":524,"name":"Nepal","alpha2":"np","alpha3":"npl"},
  {"id":528,"name":"Netherlands","alpha2":"nl","alpha3":"nld"},
  {"id":554,"name":"New Zealand","alpha2":"nz","alpha3":"nzl"},
  {"id":558,"name":"Nicaragua","alpha2":"ni","alpha3":"nic"},
  {"id":562,"name":"Niger","alpha2":"ne","alpha3":"ner"},
  {"id":566,"name":"Nigeria","alpha2":"ng","alpha3":"nga"},
  {"id":578,"name":"Norway","alpha2":"no","alpha3":"nor"},
  {"id":512,"name":"Oman","alpha2":"om","alpha3":"omn"},
  {"id":586,"name":"Pakistan","alpha2":"pk","alpha3":"pak"},
  {"id":585,"name":"Palau","alpha2":"pw","alpha3":"plw"},
  {"id":591,"name":"Panama","alpha2":"pa","alpha3":"pan"},
  {"id":598,"name":"Papua New Guinea","alpha2":"pg","alpha3":"png"},
  {"id":600,"name":"Paraguay","alpha2":"py","alpha3":"pry"},
  {"id":604,"name":"Peru","alpha2":"pe","alpha3":"per"},
  {"id":608,"name":"Philippines","alpha2":"ph","alpha3":"phl"},
  {"id":616,"name":"Poland","alpha2":"pl","alpha3":"pol"},
  {"id":620,"name":"Portugal","alpha2":"pt","alpha3":"prt"},
  {"id":634,"name":"Qatar","alpha2":"qa","alpha3":"qat"},
  {"id":642,"name":"Romania","alpha2":"ro","alpha3":"rou"},
  {"id":643,"name":"Russian Federation","alpha2":"ru","alpha3":"rus"},
  {"id":646,"name":"Rwanda","alpha2":"rw","alpha3":"rwa"},
  {"id":659,"name":"Saint Kitts and Nevis","alpha2":"kn","alpha3":"kna"},
  {"id":662,"name":"Saint Lucia","alpha2":"lc","alpha3":"lca"},
  {"id":670,"name":"Saint Vincent and the Grenadines","alpha2":"vc","alpha3":"vct"},
  {"id":882,"name":"Samoa","alpha2":"ws","alpha3":"wsm"},
  {"id":674,"name":"San Marino","alpha2":"sm","alpha3":"smr"},
  {"id":678,"name":"Sao Tome and Principe","alpha2":"st","alpha3":"stp"},
  {"id":682,"name":"Saudi Arabia","alpha2":"sa","alpha3":"sau"},
  {"id":686,"name":"Senegal","alpha2":"sn","alpha3":"sen"},
  {"id":688,"name":"Serbia","alpha2":"rs","alpha3":"srb"},
  {"id":690,"name":"Seychelles","alpha2":"sc","alpha3":"syc"},
  {"id":694,"name":"Sierra Leone","alpha2":"sl","alpha3":"sle"},
  {"id":702,"name":"Singapore","alpha2":"sg","alpha3":"sgp"},
  {"id":703,"name":"Slovakia","alpha2":"sk","alpha3":"svk"},
  {"id":705,"name":"Slovenia","alpha2":"si","alpha3":"svn"},
  {"id":90,"name":"Solomon Islands","alpha2":"sb","alpha3":"slb"},
  {"id":706,"name":"Somalia","alpha2":"so","alpha3":"som"},
  {"id":710,"name":"South Africa","alpha2":"za","alpha3":"zaf"},
  {"id":728,"name":"South Sudan","alpha2":"ss","alpha3":"ssd"},
  {"id":724,"name":"Spain","alpha2":"es","alpha3":"esp"},
  {"id":144,"name":"Sri Lanka","alpha2":"lk","alpha3":"lka"},
  {"id":729,"name":"Sudan","alpha2":"sd","alpha3":"sdn"},
  {"id":740,"name":"Suriname","alpha2":"sr","alpha3":"sur"},
  {"id":752,"name":"Sweden","alpha2":"se","alpha3":"swe"},
  {"id":756,"name":"Switzerland","alpha2":"ch","alpha3":"che"},
  {"id":760,"name":"Syrian Arab Republic","alpha2":"sy","alpha3":"syr"},
  {"id":762,"name":"Tajikistan","alpha2":"tj","alpha3":"tjk"},
  {"id":834,"name":"Tanzania, United Republic of","alpha2":"tz","alpha3":"tza"},
  {"id":764,"name":"Thailand","alpha2":"th","alpha3":"tha"},
  {"id":626,"name":"Timor-Leste","alpha2":"tl","alpha3":"tls"},
  {"id":768,"name":"Togo","alpha2":"tg","alpha3":"tgo"},
  {"id":776,"name":"Tonga","alpha2":"to","alpha3":"ton"},
  {"id":780,"name":"Trinidad and Tobago","alpha2":"tt","alpha3":"tto"},
  {"id":788,"name":"Tunisia","alpha2":"tn","alpha3":"tun"},
  {"id":792,"name":"Turkey","alpha2":"tr","alpha3":"tur"},
  {"id":795,"name":"Turkmenistan","alpha2":"tm","alpha3":"tkm"},
  {"id":798,"name":"Tuvalu","alpha2":"tv","alpha3":"tuv"},
  {"id":800,"name":"Uganda","alpha2":"ug","alpha3":"uga"},
  {"id":804,"name":"Ukraine","alpha2":"ua","alpha3":"ukr"},
  {"id":784,"name":"United Arab Emirates","alpha2":"ae","alpha3":"are"},
  {"id":826,"name":"United Kingdom of Great Britain and Northern Ireland","alpha2":"gb","alpha3":"gbr"},
  {"id":840,"name":"United States of America","alpha2":"us","alpha3":"usa"},
  {"id":858,"name":"Uruguay","alpha2":"uy","alpha3":"ury"},
  {"id":860,"name":"Uzbekistan","alpha2":"uz","alpha3":"uzb"},
  {"id":548,"name":"Vanuatu","alpha2":"vu","alpha3":"vut"},
  {"id":862,"name":"Venezuela (Bolivarian Republic of)","alpha2":"ve","alpha3":"ven"},
  {"id":704,"name":"Viet Nam","alpha2":"vn","alpha3":"vnm"},
  {"id":887,"name":"Yemen","alpha2":"ye","alpha3":"yem"},
  {"id":894,"name":"Zambia","alpha2":"zm","alpha3":"zmb"},
  {"id":716,"name":"Zimbabwe","alpha2":"zw","alpha3":"zwe"}
];

const languages = [
  {"code":"ab","name":"Abkhaz","nativeName":"аҧсуа"},
  {"code":"aa","name":"Afar","nativeName":"Afaraf"},
  {"code":"af","name":"Afrikaans","nativeName":"Afrikaans"},
  {"code":"ak","name":"Akan","nativeName":"Akan"},
  {"code":"sq","name":"Albanian","nativeName":"Shqip"},
  {"code":"am","name":"Amharic","nativeName":"አማርኛ"},
  {"code":"ar","name":"Arabic","nativeName":"العربية"},
  {"code":"an","name":"Aragonese","nativeName":"Aragonés"},
  {"code":"hy","name":"Armenian","nativeName":"Հայերեն"},
  {"code":"as","name":"Assamese","nativeName":"অসমীয়া"},
  {"code":"av","name":"Avaric","nativeName":"авар мацӀ, магӀарул мацӀ"},
  {"code":"ae","name":"Avestan","nativeName":"avesta"},
  {"code":"ay","name":"Aymara","nativeName":"aymar aru"},
  {"code":"az","name":"Azerbaijani","nativeName":"azərbaycan dili"},
  {"code":"bm","name":"Bambara","nativeName":"bamanankan"},
  {"code":"ba","name":"Bashkir","nativeName":"башҡорт теле"},
  {"code":"eu","name":"Basque","nativeName":"euskara, euskera"},
  {"code":"be","name":"Belarusian","nativeName":"Беларуская"},
  {"code":"bn","name":"Bengali","nativeName":"বাংলা"},
  {"code":"bh","name":"Bihari","nativeName":"भोजपुरी"},
  {"code":"bi","name":"Bislama","nativeName":"Bislama"},
  {"code":"bs","name":"Bosnian","nativeName":"bosanski jezik"},
  {"code":"br","name":"Breton","nativeName":"brezhoneg"},
  {"code":"bg","name":"Bulgarian","nativeName":"български език"},
  {"code":"my","name":"Burmese","nativeName":"ဗမာစာ"},
  {"code":"ca","name":"Catalan; Valencian","nativeName":"Català"},
  {"code":"ch","name":"Chamorro","nativeName":"Chamoru"},
  {"code":"ce","name":"Chechen","nativeName":"нохчийн мотт"},
  {"code":"ny","name":"Chichewa; Chewa; Nyanja","nativeName":"chiCheŵa, chinyanja"},
  {"code":"zh","name":"Chinese","nativeName":"中文 (Zhōngwén), 汉语, 漢語"},
  {"code":"cv","name":"Chuvash","nativeName":"чӑваш чӗлхи"},
  {"code":"kw","name":"Cornish","nativeName":"Kernewek"},
  {"code":"co","name":"Corsican","nativeName":"corsu, lingua corsa"},
  {"code":"cr","name":"Cree","nativeName":"ᓀᐦᐃᔭᐍᐏᐣ"},
  {"code":"hr","name":"Croatian","nativeName":"hrvatski"},
  {"code":"cs","name":"Czech","nativeName":"česky, čeština"},
  {"code":"da","name":"Danish","nativeName":"dansk"},
  {"code":"dv","name":"Divehi; Dhivehi; Maldivian;","nativeName":"ދިވެހި"},
  {"code":"nl","name":"Dutch","nativeName":"Nederlands, Vlaams"},
  {"code":"en","name":"English","nativeName":"English"},
  {"code":"eo","name":"Esperanto","nativeName":"Esperanto"},
  {"code":"et","name":"Estonian","nativeName":"eesti, eesti keel"},
  {"code":"ee","name":"Ewe","nativeName":"Eʋegbe"},
  {"code":"fo","name":"Faroese","nativeName":"føroyskt"},
  {"code":"fj","name":"Fijian","nativeName":"vosa Vakaviti"},
  {"code":"fi","name":"Finnish","nativeName":"suomi, suomen kieli"},
  {"code":"fr","name":"French","nativeName":"français, langue française"},
  {"code":"ff","name":"Fula; Fulah; Pulaar; Pular","nativeName":"Fulfulde, Pulaar, Pular"},
  {"code":"gl","name":"Galician","nativeName":"Galego"},
  {"code":"ka","name":"Georgian","nativeName":"ქართული"},
  {"code":"de","name":"German","nativeName":"Deutsch"},
  {"code":"el","name":"Greek, Modern","nativeName":"Ελληνικά"},
  {"code":"gn","name":"Guaraní","nativeName":"Avañeẽ"},
  {"code":"gu","name":"Gujarati","nativeName":"ગુજરાતી"},
  {"code":"ht","name":"Haitian; Haitian Creole","nativeName":"Kreyòl ayisyen"},
  {"code":"ha","name":"Hausa","nativeName":"Hausa, هَوُسَ"},
  {"code":"he","name":"Hebrew (modern)","nativeName":"עברית"},
  {"code":"hz","name":"Herero","nativeName":"Otjiherero"},
  {"code":"hi","name":"Hindi","nativeName":"हिन्दी, हिंदी"},
  {"code":"ho","name":"Hiri Motu","nativeName":"Hiri Motu"},
  {"code":"hu","name":"Hungarian","nativeName":"Magyar"},
  {"code":"ia","name":"Interlingua","nativeName":"Interlingua"},
  {"code":"id","name":"Indonesian","nativeName":"Bahasa Indonesia"},
  {"code":"ie","name":"Interlingue","nativeName":"Originally called Occidental; then Interlingue after WWII"},
  {"code":"ga","name":"Irish","nativeName":"Gaeilge"},
  {"code":"ig","name":"Igbo","nativeName":"Asụsụ Igbo"},
  {"code":"ik","name":"Inupiaq","nativeName":"Iñupiaq, Iñupiatun"},
  {"code":"io","name":"Ido","nativeName":"Ido"},
  {"code":"is","name":"Icelandic","nativeName":"Íslenska"},
  {"code":"it","name":"Italian","nativeName":"Italiano"},
  {"code":"iu","name":"Inuktitut","nativeName":"ᐃᓄᒃᑎᑐᑦ"},
  {"code":"ja","name":"Japanese","nativeName":"日本語 (にほんご／にっぽんご)"},
  {"code":"jv","name":"Javanese","nativeName":"basa Jawa"},
  {"code":"kl","name":"Kalaallisut, Greenlandic","nativeName":"kalaallisut, kalaallit oqaasii"},
  {"code":"kn","name":"Kannada","nativeName":"ಕನ್ನಡ"},
  {"code":"kr","name":"Kanuri","nativeName":"Kanuri"},
  {"code":"ks","name":"Kashmiri","nativeName":"कश्मीरी, كشميري‎"},
  {"code":"kk","name":"Kazakh","nativeName":"Қазақ тілі"},
  {"code":"km","name":"Khmer","nativeName":"ភាសាខ្មែរ"},
  {"code":"ki","name":"Kikuyu, Gikuyu","nativeName":"Gĩkũyũ"},
  {"code":"rw","name":"Kinyarwanda","nativeName":"Ikinyarwanda"},
  {"code":"ky","name":"Kirghiz, Kyrgyz","nativeName":"кыргыз тили"},
  {"code":"kv","name":"Komi","nativeName":"коми кыв"},
  {"code":"kg","name":"Kongo","nativeName":"KiKongo"},
  {"code":"ko","name":"Korean","nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"},
  {"code":"ku","name":"Kurdish","nativeName":"Kurdî, كوردی‎"},
  {"code":"kj","name":"Kwanyama, Kuanyama","nativeName":"Kuanyama"},
  {"code":"la","name":"Latin","nativeName":"latine, lingua latina"},
  {"code":"lb","name":"Luxembourgish, Letzeburgesch","nativeName":"Lëtzebuergesch"},
  {"code":"lg","name":"Luganda","nativeName":"Luganda"},
  {"code":"li","name":"Limburgish, Limburgan, Limburger","nativeName":"Limburgs"},
  {"code":"ln","name":"Lingala","nativeName":"Lingála"},
  {"code":"lo","name":"Lao","nativeName":"ພາສາລາວ"},
  {"code":"lt","name":"Lithuanian","nativeName":"lietuvių kalba"},
  {"code":"lu","name":"Luba-Katanga","nativeName":""},
  {"code":"lv","name":"Latvian","nativeName":"latviešu valoda"},
  {"code":"gv","name":"Manx","nativeName":"Gaelg, Gailck"},
  {"code":"mk","name":"Macedonian","nativeName":"македонски јазик"},
  {"code":"mg","name":"Malagasy","nativeName":"Malagasy fiteny"},
  {"code":"ms","name":"Malay","nativeName":"bahasa Melayu, بهاس ملايو‎"},
  {"code":"ml","name":"Malayalam","nativeName":"മലയാളം"},
  {"code":"mt","name":"Maltese","nativeName":"Malti"},
  {"code":"mi","name":"Māori","nativeName":"te reo Māori"},
  {"code":"mr","name":"Marathi (Marāṭhī)","nativeName":"मराठी"},
  {"code":"mh","name":"Marshallese","nativeName":"Kajin M̧ajeļ"},
  {"code":"mn","name":"Mongolian","nativeName":"монгол"},
  {"code":"na","name":"Nauru","nativeName":"Ekakairũ Naoero"},
  {"code":"nv","name":"Navajo, Navaho","nativeName":"Diné bizaad, Dinékʼehǰí"},
  {"code":"nb","name":"Norwegian Bokmål","nativeName":"Norsk bokmål"},
  {"code":"nd","name":"North Ndebele","nativeName":"isiNdebele"},
  {"code":"ne","name":"Nepali","nativeName":"नेपाली"},
  {"code":"ng","name":"Ndonga","nativeName":"Owambo"},
  {"code":"nn","name":"Norwegian Nynorsk","nativeName":"Norsk nynorsk"},
  {"code":"no","name":"Norwegian","nativeName":"Norsk"},
  {"code":"ii","name":"Nuosu","nativeName":"ꆈꌠ꒿ Nuosuhxop"},
  {"code":"nr","name":"South Ndebele","nativeName":"isiNdebele"},
  {"code":"oc","name":"Occitan","nativeName":"Occitan"},
  {"code":"oj","name":"Ojibwe, Ojibwa","nativeName":"ᐊᓂᔑᓈᐯᒧᐎᓐ"},
  {"code":"cu","name":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic","nativeName":"ѩзыкъ словѣньскъ"},
  {"code":"om","name":"Oromo","nativeName":"Afaan Oromoo"},
  {"code":"or","name":"Oriya","nativeName":"ଓଡ଼ିଆ"},
  {"code":"os","name":"Ossetian, Ossetic","nativeName":"ирон æвзаг"},
  {"code":"pa","name":"Panjabi, Punjabi","nativeName":"ਪੰਜਾਬੀ, پنجابی‎"},
  {"code":"pi","name":"Pāli","nativeName":"पाऴि"},
  {"code":"fa","name":"Persian","nativeName":"فارسی"},
  {"code":"pl","name":"Polish","nativeName":"polski"},
  {"code":"ps","name":"Pashto, Pushto","nativeName":"پښتو"},
  {"code":"pt","name":"Portuguese","nativeName":"Português"},
  {"code":"qu","name":"Quechua","nativeName":"Runa Simi, Kichwa"},
  {"code":"rm","name":"Romansh","nativeName":"rumantsch grischun"},
  {"code":"rn","name":"Kirundi","nativeName":"kiRundi"},
  {"code":"ro","name":"Romanian, Moldavian, Moldovan","nativeName":"română"},
  {"code":"ru","name":"Russian","nativeName":"русский язык"},
  {"code":"sa","name":"Sanskrit (Saṁskṛta)","nativeName":"संस्कृतम्"},
  {"code":"sc","name":"Sardinian","nativeName":"sardu"},
  {"code":"sd","name":"Sindhi","nativeName":"सिन्धी, سنڌي، سندھی‎"},
  {"code":"se","name":"Northern Sami","nativeName":"Davvisámegiella"},
  {"code":"sm","name":"Samoan","nativeName":"gagana faa Samoa"},
  {"code":"sg","name":"Sango","nativeName":"yângâ tî sängö"},
  {"code":"sr","name":"Serbian","nativeName":"српски језик"},
  {"code":"gd","name":"Scottish Gaelic; Gaelic","nativeName":"Gàidhlig"},
  {"code":"sn","name":"Shona","nativeName":"chiShona"},
  {"code":"si","name":"Sinhala, Sinhalese","nativeName":"සිංහල"},
  {"code":"sk","name":"Slovak","nativeName":"slovenčina"},
  {"code":"sl","name":"Slovene","nativeName":"slovenščina"},
  {"code":"so","name":"Somali","nativeName":"Soomaaliga, af Soomaali"},
  {"code":"st","name":"Southern Sotho","nativeName":"Sesotho"},
  {"code":"es","name":"Spanish; Castilian","nativeName":"español, castellano"},
  {"code":"su","name":"Sundanese","nativeName":"Basa Sunda"},
  {"code":"sw","name":"Swahili","nativeName":"Kiswahili"},
  {"code":"ss","name":"Swati","nativeName":"SiSwati"},
  {"code":"sv","name":"Swedish","nativeName":"svenska"},
  {"code":"ta","name":"Tamil","nativeName":"தமிழ்"},
  {"code":"te","name":"Telugu","nativeName":"తెలుగు"},
  {"code":"tg","name":"Tajik","nativeName":"тоҷикӣ, toğikī, تاجیکی‎"},
  {"code":"th","name":"Thai","nativeName":"ไทย"},
  {"code":"ti","name":"Tigrinya","nativeName":"ትግርኛ"},
  {"code":"bo","name":"Tibetan Standard, Tibetan, Central","nativeName":"བོད་ཡིག"},
  {"code":"tk","name":"Turkmen","nativeName":"Türkmen, Түркмен"},
  {"code":"tl","name":"Tagalog","nativeName":"Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"},
  {"code":"tn","name":"Tswana","nativeName":"Setswana"},
  {"code":"to","name":"Tonga (Tonga Islands)","nativeName":"faka Tonga"},
  {"code":"tr","name":"Turkish","nativeName":"Türkçe"},
  {"code":"ts","name":"Tsonga","nativeName":"Xitsonga"},
  {"code":"tt","name":"Tatar","nativeName":"татарча, tatarça, تاتارچا‎"},
  {"code":"tw","name":"Twi","nativeName":"Twi"},
  {"code":"ty","name":"Tahitian","nativeName":"Reo Tahiti"},
  {"code":"ug","name":"Uighur, Uyghur","nativeName":"Uyƣurqə, ئۇيغۇرچە‎"},
  {"code":"uk","name":"Ukrainian","nativeName":"українська"},
  {"code":"ur","name":"Urdu","nativeName":"اردو"},
  {"code":"uz","name":"Uzbek","nativeName":"zbek, Ўзбек, أۇزبېك‎"},
  {"code":"ve","name":"Venda","nativeName":"Tshivenḓa"},
  {"code":"vi","name":"Vietnamese","nativeName":"Tiếng Việt"},
  {"code":"vo","name":"Volapük","nativeName":"Volapük"},
  {"code":"wa","name":"Walloon","nativeName":"Walon"},
  {"code":"cy","name":"Welsh","nativeName":"Cymraeg"},
  {"code":"wo","name":"Wolof","nativeName":"Wollof"},
  {"code":"fy","name":"Western Frisian","nativeName":"Frysk"},
  {"code":"xh","name":"Xhosa","nativeName":"isiXhosa"},
  {"code":"yi","name":"Yiddish","nativeName":"ייִדיש"},
  {"code":"yo","name":"Yoruba","nativeName":"Yorùbá"},
  {"code":"za","name":"Zhuang, Chuang","nativeName":"Saɯ cueŋƅ, Saw cuengh"}
]


let countriesFixed = [];
for (let i = 0; i < countries.length; i++) {
  countriesFixed.push({value: countries[i].name, label: countries[i].name});
}

let languagesFixed = [];
for (let i = 0; i < languages.length; i++) {
  languagesFixed.push({value: languages[i].name, label: languages[i].name});
}

const optionsPracticeArea = [
  { value: 'immigration', label: 'Immigration' },
  { value: 'incorporation', label: 'Incorporation' },
  { value: 'taxexemption', label: 'Tax exemption' },
  { value: 'courtproceeding', label: 'Court proceeding' },
  { value: 'documentreview', label: 'Document review' },
  { value: 'research', label: 'Research' },
];

class PracticeAreaSelect extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={optionsPracticeArea}
        isMulti={true}
      />
    );
  }
}


const optionsLegalSkill = [
  { value: 'immigration', label: 'Immigration' },
  { value: 'incorporation', label: 'Incorporation' },
  { value: 'taxexemption', label: 'Tax exemption' },
  { value: 'courtproceeding', label: 'Court proceeding' },
  { value: 'documentreview', label: 'Document review' },
  { value: 'research', label: 'Research' },
];

class LegalSkillSelect extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={optionsLegalSkill}
        isMulti={true}
      />
    );
  }
}

class JurisdictionSelect extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={countriesFixed}
        isMulti={true}
      />
    );
  }
}

class LanguageSelect extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={languagesFixed}
        isMulti={true}
      />
    );
  }
}

class DayInput extends React.Component {
  state = {
    selectedDay: null,
  }
  handleChange = (selectedDay) => {
    this.setState({ selectedDay });
    console.log('Day selected: ', selectedDay);
  }
  render() {
    const { selectedDay } = this.state;

    return (
      <DayPickerInput 
        onDayChange={selectedDay => this.handleChange(selectedDay)}
        formatDate={formatDate}
        parseDate={parseDate}
        placeholder='MM/DD/YYYY' 
      />
    );
  }
}


export default () => (
  <GuestLayout>
    <div className="container p-b-md p-r-md p-l-md">

    <div className="row ">
        <div className="col-md-2 order-md-1 bordered">
          <LeftUserColumn />
        </div>
        <div className="col-md-6 order-md-1 bordered">
        <h4 className="mb-3 page-heading">Create a new Case</h4>
        <form className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" placeholder="" required />
          </div>
          <div className="mb-3">
            <label htmlFor="practice-area">Practice Area</label>
            <PracticeAreaSelect />
          </div>
          <div className="mb-3">
            <label htmlFor="jurisdiction">Jurisdiction</label>
            <JurisdictionSelect />
          </div>            
          <div className="mb-3">
            <label htmlFor="description">Description</label>
            <textarea id="description" className="form-control" rows="3" placeholder="" required></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="priority">Priority</label>
            <select className="custom-select d-block w-100" id="priority" required>
              <option defaultValue="">Choose...</option>
              <option>Immediate</option>
              <option>Flexible</option>
              <option>Long term</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="deadline">Expected Date of Completion</label>
            <br />
            <DayInput />
          </div>
          <div className="mb-3">
            <label htmlFor="legal-skill">Legal skill</label>
            <LegalSkillSelect />
          </div>
          <div className="mb-3">
            <label htmlFor="priority">Relevant Language</label>
            <LanguageSelect />
          </div>
          <hr className="mb-4" />
          <button className="btn btn-primary btn-lg btn-block" type="submit">Create Case</button>
        </form>
        </div>
      </div> 

    </div>
  </GuestLayout>
);
