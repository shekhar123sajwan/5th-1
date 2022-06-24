 
// const puppeteer = require('puppeteer');
var request = require('request');
var cheerio = require('cheerio');
const express = require('express')
const axios = require('axios')
const fs = require('fs')
var find = require('cheerio-eq');
require("json-circular-stringify");
const Downloader = require("nodejs-file-downloader");

queue = [
  "https://allfamous.org/people/luke-youngblood-19860612.html",
    "https://allfamous.org/people/drew-ochsner-19990612.html",
    "https://allfamous.org/people/allex-gingras-19970612.html",
    "https://allfamous.org/people/meimonstaa-uw1c.html",
    "https://allfamous.org/people/repzilla-19890612.html",
    "https://allfamous.org/people/eamonn-walker-19620612.html",
    "https://allfamous.org/people/julia-bergeron-20030612.html",
    "https://allfamous.org/people/jarneia-richard-noel-19940612.html",
    "https://allfamous.org/people/sev-philippou-19910612.html",
    "https://allfamous.org/people/eldad-hagar-19750612.html",
    "https://allfamous.org/people/carla-abellana-19860612.html",
    "https://allfamous.org/people/yadiel-figueroa-20010612.html",
    "https://allfamous.org/people/allie-dimeco-19920612.html",
    "https://allfamous.org/people/quackalakes-19980612.html",
    "https://allfamous.org/people/river-blackstock-20140612.html",
    "https://allfamous.org/people/finesse-mitchell-19720612.html",
    "https://allfamous.org/people/jesus-crazy-19760612.html",
    "https://allfamous.org/people/jeremy-howard-19810612.html",
    "https://allfamous.org/people/symon-19920612.html",
    "https://allfamous.org/people/stephanie-bennett-19890612.html",
    "https://allfamous.org/people/francisca-aronsson-20060612.html",
    "https://allfamous.org/people/nathan-williams-19860612.html",
    "https://allfamous.org/people/stephanie-jabro-20010612.html",
    "https://allfamous.org/people/frank-sweetea-20000612.html",
    "https://allfamous.org/people/rick-hoffman-19700612.html",
    "https://allfamous.org/people/marion-jola-20000612.html",
    "https://allfamous.org/people/jeff-bethke-19890612.html",
    "https://allfamous.org/people/joshua-kushner-19850612.html",
    "https://allfamous.org/people/jason-mewes-19740612.html",
    "https://allfamous.org/people/aron-flam-19780612.html",
    "https://allfamous.org/people/jonathan-fernandez-19840612.html",
    "https://allfamous.org/people/nisa-kay-19910612.html",
    
    "https://allfamous.org/people/emma-green-19860612.html",
    "https://allfamous.org/people/dantreal-clark-20030612.html",
    "https://allfamous.org/people/landon-nordeman-19740612.html",
    "https://allfamous.org/people/lexi-slaven-19980612.html",
    "https://allfamous.org/people/meredith-brooks-19580612.html",
    "https://allfamous.org/people/laura-kirkpatrick-19890612.html",
    "https://allfamous.org/people/averie-sunshine-19760612.html",
    "https://allfamous.org/people/gerard-sabe-19960612.html",
    "https://allfamous.org/people/isabela-soares-20060612.html",
    "https://allfamous.org/people/tariq-al-harbi-19890612.html",
    "https://allfamous.org/people/john-gourley-19810612.html",
    "https://allfamous.org/people/sam-thaiday-19850612.html",
    "https://allfamous.org/people/molli-fogarasy-20030612.html",
    "https://allfamous.org/people/sebastian-cordova-4a1x.html",
    "https://allfamous.org/people/vicky-od-19920612.html",
    "https://allfamous.org/people/markus-smith-20000612.html",
    "https://allfamous.org/people/sherri-hill-19490612.html",
    "https://allfamous.org/people/carly-craig-19800612.html",
    "https://allfamous.org/people/ryan-malgarini-19920612.html",
    "https://allfamous.org/people/tim-dekay-19630612.html",
    "https://allfamous.org/people/roy-harper-19410612.html",
    "https://allfamous.org/people/tamika-mallory-19800612.html",
    "https://allfamous.org/people/ivo-linna-19490612.html",
    "https://allfamous.org/people/malachi-pearson-19810612.html",
    "https://allfamous.org/people/12th-hour-20010612.html",
    "https://allfamous.org/people/chad-rader-19820612.html",
    "https://allfamous.org/people/dallas-clark-19790612.html",
    "https://allfamous.org/people/alfonso-boada-19950612.html",
    "https://allfamous.org/people/jenilee-harrison-19590612.html",
    "https://allfamous.org/people/jessica-yaniv-19870612.html",
    "https://allfamous.org/people/chase-demoor-19960612.html",
    "https://allfamous.org/people/queen-pee-19920612.html",
    "https://allfamous.org/people/roberta-carluccio-19970612.html",
    "https://allfamous.org/people/frankie-palmeri-19860612.html",
    "https://allfamous.org/people/bella-blair-19910612.html",
    "https://allfamous.org/people/seths-bike-hacks-19850612.html",
    "https://allfamous.org/people/scott-thompson-19590612.html",
    "https://allfamous.org/people/georgina-campbell-19920612.html",
    "https://allfamous.org/people/muto-takashi-19790612.html",
    "https://allfamous.org/people/tatjana-catic-19910612.html",
    "https://allfamous.org/people/gavin-sandfort-20020612.html",
    "https://allfamous.org/people/louisa-gummer-19910612.html",
    "https://allfamous.org/people/norman-caruso-19870612.html",
    "https://allfamous.org/people/frances-oconnor-19670612.html",
    "https://allfamous.org/people/timothy-simons-19780612.html",
    "https://allfamous.org/people/ashlyn-van-horn-19960612.html",
    "https://allfamous.org/people/nicolas-vazquez-19770612.html",
    "https://allfamous.org/people/jez-dior-19920612.html",
    
    "https://allfamous.org/people/erika-michelle-20000612.html",
    "https://allfamous.org/people/kalash-19880612.html",
    "https://allfamous.org/people/jonathan-osorio-19920612.html",
    "https://allfamous.org/people/bryan-habana-19830612.html",
    "https://allfamous.org/people/sonia-manzano-19500612.html",
    "https://allfamous.org/people/swingpoynt-19920612.html",
    "https://allfamous.org/people/yamato-inoue-xqjb.html",
    "https://allfamous.org/people/thundershot69-19930612.html",
    "https://allfamous.org/people/chris-baris-19940612.html",
    "https://allfamous.org/people/kashkale-19990612.html",
    "https://allfamous.org/people/davinson-sanchez-19960612.html",
    "https://allfamous.org/people/steve-savoca-19970612.html",
    "https://allfamous.org/people/danielle-sandler-19950612.html",
    "https://allfamous.org/people/rebecca-holden-19580612.html",
    "https://allfamous.org/people/robert-beer-tlf8.html",
    "https://allfamous.org/people/sean-nelson-19730612.html",
    "https://allfamous.org/people/earl-watson-19790612.html",
    "https://allfamous.org/people/sarina-vs-19960612.html",
    "https://allfamous.org/people/ella-joyce-19540612.html",
    "https://allfamous.org/people/lulzim-basha-19740612.html",
    "https://allfamous.org/people/marv-albert-19410612.html",
    "https://allfamous.org/people/shiloh-strong-19780612.html",
    "https://allfamous.org/people/kieran-shudall-19870612.html",
    "https://allfamous.org/people/jove-19860612.html",
    "https://allfamous.org/people/todd-talbot-19730612.html",
    "https://allfamous.org/people/stephanie-szostak-19750612.html",
    "https://allfamous.org/people/reina-angelica-19960612.html",
    "https://allfamous.org/people/john-linnell-19590612.html",
    "https://allfamous.org/people/omar-regan-19750612.html",
    "https://allfamous.org/people/antonio-diaz-19800612.html",
    "https://allfamous.org/people/timmac-19830612.html",
    "https://allfamous.org/people/pat-jennings-19450612.html",
    "https://allfamous.org/people/takis-fyssas-19730612.html",
    "https://allfamous.org/people/salim-mehajer-19860612.html",
    "https://allfamous.org/people/iqram-azman-19970612.html",
    "https://allfamous.org/people/kent-moran-19820612.html",
    "https://allfamous.org/people/brian-anderson-19760612.html",
    "https://allfamous.org/people/linn-moberg-19980612.html",
    "https://allfamous.org/people/jake-harrison-19920612.html",
    "https://allfamous.org/people/basstop-19960612.html",
    "https://allfamous.org/people/antawn-jamison-19760612.html",
    "https://allfamous.org/people/tom-oliver-19380612.html",
    "https://allfamous.org/people/david-thornton-19530612.html",
    "https://allfamous.org/people/paula-marshall-19640612.html",
    "https://allfamous.org/people/gregory-alan-williams-19560612.html",
    "https://allfamous.org/people/filiz-19830612.html",
    "https://allfamous.org/people/aisha-baker-parnell-19900612.html",
    "https://allfamous.org/people/xanddy-19790612.html",
    
    "https://allfamous.org/people/marco-damore-19810612.html",
    "https://allfamous.org/people/chan-sori-20000612.html",
    "https://allfamous.org/people/brian-aubert-19760612.html",
    "https://allfamous.org/people/bun-e-carlos-19510612.html",
    "https://allfamous.org/people/michael-muhney-19750612.html",
    "https://allfamous.org/people/kenny-wayne-shepherd-19770612.html",
    "https://allfamous.org/people/kurtjmac-19820612.html",
    "https://allfamous.org/people/lili-anne-20010612.html",
    "https://allfamous.org/people/djcoroking-19910612.html",
    "https://allfamous.org/people/bryan-alvarez-19750612.html",
    "https://allfamous.org/people/robbie-henshaw-19930612.html",
    "https://allfamous.org/people/jenna-willis-19860612.html",
    "https://allfamous.org/people/rozalen-19860612.html",
    "https://allfamous.org/people/potato-mctater-20140612.html",
    "https://allfamous.org/people/diego-milito-19790612.html",
    "https://allfamous.org/people/timothy-busfield-19570612.html",
    "https://allfamous.org/people/daylow-dev-19970612.html",
    "https://allfamous.org/people/afua-hirsch-19810612.html",
    "https://allfamous.org/people/andrew-howard-19690612.html",
    "https://allfamous.org/people/shannyn-moore-19700612.html",
    "https://allfamous.org/people/darius-bazley-20000612.html",
    "https://allfamous.org/people/eren-derdiyok-19880612.html",
    "https://allfamous.org/people/chloe-harvey-20030612.html",
    "https://allfamous.org/people/erik-sprague-19720612.html",
    "https://allfamous.org/people/jacelyn-tay-19750612.html",
    "https://allfamous.org/people/hideki-matsui-19740612.html",
    "https://allfamous.org/people/sergio-rodriguez-19860612.html",
    "https://allfamous.org/people/jason-david-19820612.html",
    "https://allfamous.org/people/carolina-cruz-19790612.html",
    "https://allfamous.org/people/avisail-garcia-19910612.html",
    "https://allfamous.org/people/ceaira-aniyah-19980612.html",
    "https://allfamous.org/people/sofia-gomez-20010612.html",
    "https://allfamous.org/people/jennifer-jo-cobb-19730612.html",
    "https://allfamous.org/people/yaco-beltran-20010612.html",
    "https://allfamous.org/people/seyi-ajirotutu-19870612.html",
    "https://allfamous.org/people/lee-matthews-19880612.html",
    "https://allfamous.org/people/sophy-robson-19980612.html",
    "https://allfamous.org/people/angel-lumaban-19990612.html",
    "https://allfamous.org/people/courtney-galiano-19880612.html",
    "https://allfamous.org/people/liza-prideaux-19890612.html",
    "https://allfamous.org/people/amir-khadir-19610612.html",
    "https://allfamous.org/people/mel-rodriguez-19730612.html",
    "https://allfamous.org/people/jaycee-wall-19890612.html",
    "https://allfamous.org/people/jamie-lee-darley-19860612.html",
    "https://allfamous.org/people/pameluft-19920612.html",
    "https://allfamous.org/people/gabriel-gava-19910612.html",
    "https://allfamous.org/people/paul-schulze-19620612.html",
    "https://allfamous.org/people/mirela-janis-19970612.html",
    
    "https://allfamous.org/people/chris-evans-19810613.html",
    "https://allfamous.org/people/mary-kate-olsen-19860613.html",
    "https://allfamous.org/people/daniella-perkins-20000613.html",
    "https://allfamous.org/people/gabby-morrison-20010613.html",
    "https://allfamous.org/people/ashley-olsen-19860613.html",
    "https://allfamous.org/people/melissa-gisoni-19680613.html",
    "https://allfamous.org/people/badkidmirah-20070613.html",
    "https://allfamous.org/people/aaron-taylor-johnson-19900613.html",
    "https://allfamous.org/people/devore-ledridge-20010613.html",
    "https://allfamous.org/people/dj-snake-19860613.html",
    "https://allfamous.org/people/eben-franckewitz-19960613.html",
    "https://allfamous.org/people/junior-andre-20050613.html",
    "https://allfamous.org/people/jaden-newman-20040613.html",
    "https://allfamous.org/people/tim-allen-19530613.html",
    "https://allfamous.org/people/kat-dennings-19860613.html",
    "https://allfamous.org/people/itsvayy-20050613.html",
    "https://allfamous.org/people/steve-o-19740613.html",
    "https://allfamous.org/people/lucas-watson-19920613.html",
    "https://allfamous.org/people/mikayla-nogueira-19980613.html",
    "https://allfamous.org/people/rumi-carter-20170613.html",
    "https://allfamous.org/people/bree-wasylenko-19880613.html",
    "https://allfamous.org/people/luke-james-19840613.html",
    "https://allfamous.org/people/gianna-luke-20030613.html",
    "https://allfamous.org/people/coco-arquette-20040613.html",
    "https://allfamous.org/people/levy-jansen-20010613.html",
    "https://allfamous.org/people/sir-carter-20170613.html",
    "https://allfamous.org/people/hotboii-20000613.html",
    "https://allfamous.org/people/celina-powell-19950613.html",
    "https://allfamous.org/people/lentotally-20000613.html",
    "https://allfamous.org/people/violet-chachki-19920613.html",
    "https://allfamous.org/people/arantza-fahnbulleh-19930613.html",
    "https://allfamous.org/people/mackenzie-singer-20050613.html",
    "https://allfamous.org/people/prestige-clips-19930613.html",
    "https://allfamous.org/people/amelia-gray-hamlin-20010613.html",
    "https://allfamous.org/people/jensiee-20020613.html",
    "https://allfamous.org/people/cole-burge-tiktok-star.html",
    "https://allfamous.org/people/denise-soong-ee-lyn-19950613.html",
    "https://allfamous.org/people/ashley-wicka-20020613.html",
    "https://allfamous.org/people/annoyingtv-19970613.html",
    "https://allfamous.org/people/fabio-jackson-19930613.html",
    "https://allfamous.org/people/morgan-cryer-20020613.html",
    "https://allfamous.org/people/mya-torres-20050613.html",
    "https://allfamous.org/people/jordan-page-19790613.html",
    "https://allfamous.org/people/paul-abrahamian-19930613.html",
    "https://allfamous.org/people/stellan-skarsgard-19510613.html",
    "https://allfamous.org/people/yasmine-nicole-19950613.html",
    "https://allfamous.org/people/rivers-cuomo-19700613.html",
    "https://allfamous.org/people/neona-20090613.html",
    
    "https://allfamous.org/people/adrian-yumul-tiktok-star.html",
    "https://allfamous.org/people/csenge-forstner-tiktok-star.html",
    "https://allfamous.org/people/tara-lynn-19900613.html",
    "https://allfamous.org/people/lil-t-20040613.html",
    "https://allfamous.org/people/disha-patani-19920613.html",
    "https://allfamous.org/people/mans-zelmerlow-19860613.html",
    "https://allfamous.org/people/taylor-selfridge-19940613.html",
    "https://allfamous.org/people/cody-walker-19880613.html",
    "https://allfamous.org/people/070-shake-19970613.html",
    "https://allfamous.org/people/kym-marsh-19760613.html",
    "https://allfamous.org/people/tanya-scott-19930613.html",
    "https://allfamous.org/people/hassan-whiteside-19890613.html",
    "https://allfamous.org/people/julia-crist-20000613.html",
    "https://allfamous.org/people/sabrina-abu-obeid-19900613.html",
    "https://allfamous.org/people/valeri-bure-19740613.html",
    "https://allfamous.org/people/joshua-williams-19980613.html",
    "https://allfamous.org/people/jessica-caban-19820613.html",
    "https://allfamous.org/people/jeff-davis-19750613.html",
    "https://allfamous.org/people/coko-19700613.html",
    "https://allfamous.org/people/penny-oleksiak-20000613.html",
    "https://allfamous.org/people/faizaan-kumran-19980613.html",
    "https://allfamous.org/people/jackson-michie-19950613.html",
    "https://allfamous.org/people/tara-sterchi-20050613.html",
    "https://allfamous.org/people/lucas-edwards-20000613.html",
    "https://allfamous.org/people/sydney-boel-20040613.html",
    "https://allfamous.org/people/klaus-iohannis-19590613.html",
    "https://allfamous.org/people/mick-fanning-19810613.html",
    "https://allfamous.org/people/hot-sauce-19760613.html",
    "https://allfamous.org/people/ally-sheedy-19620613.html",
    "https://allfamous.org/people/sarah-connor-19800613.html",
    "https://allfamous.org/people/mike-smith-19590613.html",
    "https://allfamous.org/people/kodi-smit-mcphee-19960613.html",
    "https://allfamous.org/people/boyko-borisov-19590613.html",
    "https://allfamous.org/people/gamerbrother-19980613.html",
    "https://allfamous.org/people/joshua-shea-20020613.html",
    "https://allfamous.org/people/jadah-blue-19900613.html",
    "https://allfamous.org/people/cathy-cassidy-19620613.html",
    "https://allfamous.org/people/jennifer-nicole-lee-19750613.html",
    "https://allfamous.org/people/stephanie-hollman-19800613.html",
    "https://allfamous.org/people/jamie-paige-19940613.html",
    "https://allfamous.org/people/cameron-liddell-19890613.html",
    "https://allfamous.org/people/elizabeth-zaks-19960613.html",
    "https://allfamous.org/people/charlie-roxburgh-cu2y.html",
    "https://allfamous.org/people/tanner-foust-19730613.html",
    "https://allfamous.org/people/priscilla-star-diaz-19940613.html",
    "https://allfamous.org/people/jung-jin-sol-19970613.html",
    "https://allfamous.org/people/ak-19910613.html",
    "https://allfamous.org/people/kingsley-coman-19960613.html",
    
    "https://allfamous.org/people/lesley-gonzalez-20040613.html",
    "https://allfamous.org/people/isslender-20030613.html",
    "https://allfamous.org/people/lisa-beverly-20000613.html",
    "https://allfamous.org/people/richard-thomas-19510613.html",
    "https://allfamous.org/people/canadianproblems-20000613.html",
    "https://allfamous.org/people/julian-gil-19700613.html",
    "https://allfamous.org/people/fred-tatasciore-19680613.html",
    "https://allfamous.org/people/malcolm-mcdowell-19430613.html",
    "https://allfamous.org/people/krustydavid-20020613.html",
    "https://allfamous.org/people/ivan-lam-19920613.html",
    "https://allfamous.org/people/arielle-noa-charnas-19870613.html",
    "https://allfamous.org/people/molly-mook-20010613.html",
    "https://allfamous.org/people/gary-marley-19950613.html",
    "https://allfamous.org/people/connor-tomlin-20020613.html",
    "https://allfamous.org/people/chelsea-meissner-19850613.html",
    "https://allfamous.org/people/otilia-19920613.html",
    "https://allfamous.org/people/raz-b-19850613.html",
    "https://allfamous.org/people/jack-catney-20020613.html",
    "https://allfamous.org/people/papi-gavi-19970613.html",
    "https://allfamous.org/people/jalen-lecque-20000613.html",
    "https://allfamous.org/people/lowlevelnoob-20000613.html",
    "https://allfamous.org/people/meagan-marie-19850613.html",
    "https://allfamous.org/people/dakota-wint-19920613.html",
    "https://allfamous.org/people/tanzer-19970613.html",
    "https://allfamous.org/people/lil-bored-19940613.html",
    "https://allfamous.org/people/lexlyfe-20010613.html",
    "https://allfamous.org/people/nick-brown-19500613.html",
    "https://allfamous.org/people/petra-vlhova-19950613.html",
    "https://allfamous.org/people/valentina-herrera-20080613.html",
    "https://allfamous.org/people/denise-bidot-19860613.html",
    "https://allfamous.org/people/viniq-20000613.html",
    "https://allfamous.org/people/kimberly-castaneda-20000613.html",
    "https://allfamous.org/people/katie-lou-samuelson-19970613.html",
    "https://allfamous.org/people/ameer-abdullah-19930613.html",
    "https://allfamous.org/people/ryan-conferido-19830613.html",
    "https://allfamous.org/people/thrasher-19690613.html",
    "https://allfamous.org/people/david-gray-19680613.html",
    "https://allfamous.org/people/jimmy-broadbent-19910613.html",
    "https://allfamous.org/people/nam-da-reum-20020613.html",
    "https://allfamous.org/people/ryan-mcdonagh-19890613.html",
    "https://allfamous.org/people/lorena-haliti-19960613.html",
    "https://allfamous.org/people/bonnytrash-19970613.html",
    "https://allfamous.org/people/gv-prakash-kumar-19870613.html",
    "https://allfamous.org/people/harry-itsrosieandharry-19970613.html",
    "https://allfamous.org/people/beatrice-reiman-20000613.html",
    "https://allfamous.org/people/chanel-brown-19920613.html",
    "https://allfamous.org/people/elhadj-gaye-19900613.html",
    "https://allfamous.org/people/guvna-b-19890613.html",
    
    "https://allfamous.org/people/ian-fillinger-20040613.html",
    "https://allfamous.org/people/hasan-bhuiyan-20030613.html",
    "https://allfamous.org/people/brodinski-19870613.html",
    "https://allfamous.org/people/jaslyn-edgar-20000613.html",
    "https://allfamous.org/people/jaythe0n3-19970613.html",
    "https://allfamous.org/people/ethan-embry-19780613.html",
    "https://allfamous.org/people/maira-medeiros-19840613.html",
    "https://allfamous.org/people/samuel-lippke-19850613.html",
    "https://allfamous.org/people/jamie-walters-19690613.html",
    "https://allfamous.org/people/esther-anderson-19790613.html",
    "https://allfamous.org/people/soren-rasted-19690613.html",
    "https://allfamous.org/people/gino-pasqualini-19980613.html",
    "https://allfamous.org/people/salma-rachid-19940613.html",
    "https://allfamous.org/people/dolores-cachola-tapia-20020613.html",
    "https://allfamous.org/people/pearlescentmoon-19960613.html",
    "https://allfamous.org/people/gage-bills-20040613.html",
    "https://allfamous.org/people/keisuke-honda-19860613.html",
    "https://allfamous.org/people/emiliano-gonzalez-20020613.html",
    "https://allfamous.org/people/phillip-van-dyke-19840613.html",
    "https://allfamous.org/people/crystal-b-19900613.html",
    "https://allfamous.org/people/caprisunnpapi-k4v5.html",
    "https://allfamous.org/people/robyn-lawley-19890613.html",
    "https://allfamous.org/people/greg-daniels-19630613.html",
    "https://allfamous.org/people/ben-barba-19890613.html",
    "https://allfamous.org/people/daisy-waterstone-19940613.html",
    "https://allfamous.org/people/rainbowstarlilly-20020613.html",
    "https://allfamous.org/people/selwyn-ward-19770613.html",
    "https://allfamous.org/people/mark-maglasang-19950613.html",
    "https://allfamous.org/people/maria-julia-trindade-19980613.html",
    "https://allfamous.org/people/adrianne-ho-19870613.html",
    "https://allfamous.org/people/steve-novak-19830613.html",
    "https://allfamous.org/people/ban-ki-moon-19440613.html",
    "https://allfamous.org/people/james-mccann-19900613.html",
    "https://allfamous.org/people/kim-dong-hee-19990613.html",
    "https://allfamous.org/people/garrett-haun-20000613.html",
    "https://allfamous.org/people/fenton-merkell-20000613.html",
    "https://allfamous.org/people/lolo-lolo-free-19960613.html",
    "https://allfamous.org/people/agon-abdullahu-19950613.html",
    "https://allfamous.org/people/rebeca-mendiola-19970613.html",
    "https://allfamous.org/people/gangis-khan-19830613.html",
    "https://allfamous.org/people/dani-ross-19960613.html",
    "https://allfamous.org/people/dan-phillippi-19860613.html",
    "https://allfamous.org/people/michelle-salas-19890613.html",
    "https://allfamous.org/people/bob-mcgrath-19320613.html",
    "https://allfamous.org/people/thomas-partey-19930613.html",
    "https://allfamous.org/people/gesaffelstein-19870613.html",
    "https://allfamous.org/people/ignacio-baladan-19890613.html",
    "https://allfamous.org/people/roy-cooper-19570613.html",
    
    "https://allfamous.org/people/kathy-burke-19640613.html",
    "https://allfamous.org/people/juanita-vanoy-19590613.html",
    "https://allfamous.org/people/maxton-turner-20190613.html",
    "https://allfamous.org/people/hailey-elizabeth-8whf.html",
    "https://allfamous.org/people/julia-boel-20040613.html",
    "https://allfamous.org/people/sydney-reilly-20030613.html",
    "https://allfamous.org/people/leeann-tweeden-19730613.html",
    "https://allfamous.org/people/itro-19970613.html",
    "https://allfamous.org/people/lisa-vidal-19650613.html",
    "https://allfamous.org/people/jonathan-lucroy-19860613.html",
    "https://allfamous.org/people/seira-kagami-19870613.html",
    "https://allfamous.org/people/charlie-masso-19690613.html",
    "https://allfamous.org/people/lisa-tucker-19890613.html",
    "https://allfamous.org/people/treety-19950613.html",
    "https://allfamous.org/people/mr-papers-19880613.html",
    "https://allfamous.org/people/li-ka-shing-19280613.html",
    "https://allfamous.org/people/sonal-kwatra-paladini-19840613.html",
    "https://allfamous.org/people/jason-michael-carroll-19780613.html",
    "https://allfamous.org/people/amir-zakeri-19960613.html",
    "https://allfamous.org/people/jason-spezza-19830613.html",
    "https://allfamous.org/people/lavell-martin-20030613.html",
    "https://allfamous.org/people/imnotnatalie-20020613.html",
    "https://allfamous.org/people/sarsa-markiewicz-19890613.html",
    "https://allfamous.org/people/shukri-yahaya-19880613.html",
    "https://allfamous.org/people/greg-t-19720613.html",
    "https://allfamous.org/people/daniel-ingram-19750613.html",
    "https://allfamous.org/people/ryan-mason-19910613.html",
    "https://allfamous.org/people/tyrie-rudolph-19890613.html",
    "https://allfamous.org/people/bikeman-19800613.html",
    "https://allfamous.org/people/william-hartman-19930613.html",
    "https://allfamous.org/people/joshua-rodriguez-19970613.html",
    "https://allfamous.org/people/landry-cantrell-19910613.html",
    "https://allfamous.org/people/hannah-storm-19620613.html",
    "https://allfamous.org/people/ariana-nova-19950613.html",
    "https://allfamous.org/people/manveer-gurjar-19870613.html",
    "https://allfamous.org/people/cosima-csm-20010613.html",
    "https://allfamous.org/people/jamario-moon-19800613.html",
    "https://allfamous.org/people/jacqueline-trumbull-19910613.html",
    "https://allfamous.org/people/kenenisa-bekele-19820613.html",
    "https://allfamous.org/people/alejandra-garcia-19730613.html",
    "https://allfamous.org/people/hans-christian-sugijanto-19910613.html",
    "https://allfamous.org/people/morgan-reid-19950613.html",
    "https://allfamous.org/people/najah-aziz-19670613.html",
    "https://allfamous.org/people/martin-cirio-19840613.html",
    "https://allfamous.org/people/melanie-salas-20000613.html",
    "https://allfamous.org/people/kevin-the-k-family-20010613.html",
    "https://allfamous.org/people/david-mendenhall-19710613.html",
    "https://allfamous.org/people/alaska-19630613.html",
    
    "https://allfamous.org/people/donald-trump-19460614.html",
    "https://allfamous.org/people/lucy-hale-19890614.html",
    "https://allfamous.org/people/slimedupmike-20020614.html",
    "https://allfamous.org/people/jianhao-tan-19930614.html",
    "https://allfamous.org/people/jesy-nelson-19910614.html",
    "https://allfamous.org/people/fgteev-mom-19790614.html",
    "https://allfamous.org/people/vincent-whitaker-20040614.html",
    "https://allfamous.org/people/ryan-mccartan-19930614.html",
    "https://allfamous.org/people/tzuyu-19990614.html",
    "https://allfamous.org/people/lyon-daniels-20070614.html",
    "https://allfamous.org/people/taylor-hatala-20030614.html",
    "https://allfamous.org/people/gunna-19930614.html",
    "https://allfamous.org/people/bryce-james-20070614.html",
    "https://allfamous.org/people/boy-george-19610614.html",
    "https://allfamous.org/people/morgan-adams-19920614.html",
    "https://allfamous.org/people/katya-elise-henry-19940614.html",
    "https://allfamous.org/people/soclosetotoast-19910614.html",
    "https://allfamous.org/people/kevin-mchale-19880614.html",
    "https://allfamous.org/people/soookawaii-20030614.html",
    "https://allfamous.org/people/jittdsk-20040614.html",
    "https://allfamous.org/people/princess-nokia-19920614.html",
    "https://allfamous.org/people/daryl-sabara-19920614.html",
    "https://allfamous.org/people/tamara-smart-20050614.html",
    "https://allfamous.org/people/danny-garrison-20020614.html",
    "https://allfamous.org/people/tyrone-magnus-19770614.html",
    "https://allfamous.org/people/jett-klyne-20090614.html",
    "https://allfamous.org/people/ryan-wauters-20030614.html",
    "https://allfamous.org/people/tonyvtoons-19990614.html",
    "https://allfamous.org/people/haila-saleh-20050614.html",
    "https://allfamous.org/people/ryan-magee-19940614.html",
    "https://allfamous.org/people/derrick-dereleek-19870614.html",
    "https://allfamous.org/people/samuel-bottomley-20010614.html",
    "https://allfamous.org/people/rachel-demita-19900614.html",
    "https://allfamous.org/people/alan-carr-19760614.html",
    "https://allfamous.org/people/alexandra-felstead-19900614.html",
    "https://allfamous.org/people/alina-boz-19980614.html",
    "https://allfamous.org/people/rj-barrett-20000614.html",
    "https://allfamous.org/people/bambi-19920614.html",
    "https://allfamous.org/people/haley-beck-19980614.html",
    "https://allfamous.org/people/gemini-major-19900614.html",
    "https://allfamous.org/people/moon-taeil-19940614.html",
    "https://allfamous.org/people/ceca-19730614.html",
    "https://allfamous.org/people/sarek-20040614.html",
    "https://allfamous.org/people/sammy-watkins-19930614.html",
    "https://allfamous.org/people/gemma-howe-19990614.html",
    "https://allfamous.org/people/jacques-torres-19590614.html",
    "https://allfamous.org/people/chris-appleton-19830614.html",
    "https://allfamous.org/people/michele-maturo-19900614.html",
    
    "https://allfamous.org/people/sutan-amrull-19740614.html",
    "https://allfamous.org/people/eat-with-boki-19940614.html",
    "https://allfamous.org/people/lieve-funimate-20040614.html",
    "https://allfamous.org/people/torrance-coombs-19830614.html",
    "https://allfamous.org/people/kara-killmer-19880614.html",
    "https://allfamous.org/people/roy-hu-20020614.html",
    "https://allfamous.org/people/danielle-sylvester-19840614.html",
    "https://allfamous.org/people/freddie-gibbs-19820614.html",
    "https://allfamous.org/people/maleni-cruz-19930614.html",
    "https://allfamous.org/people/regan-burns-19680614.html",
    "https://allfamous.org/people/kiingrod-19970614.html",
    "https://allfamous.org/people/paul-ogrady-19550614.html",
    "https://allfamous.org/people/brianne-tju-19980614.html",
    "https://allfamous.org/people/lang-lang-19820614.html",
    "https://allfamous.org/people/luke-holland-19930614.html",
    "https://allfamous.org/people/alex-mytton-19910614.html",
    "https://allfamous.org/people/kristin-chirico-19840614.html",
    "https://allfamous.org/people/yasmine-bleeth-19680614.html",
    "https://allfamous.org/people/camille-ramsey-20020614.html",
    "https://allfamous.org/people/aye-verb-19840614.html",
    "https://allfamous.org/people/jonathan-young-19940614.html",
    "https://allfamous.org/people/ashtonjay17-tiktok-star.html",
    "https://allfamous.org/people/faizon-love-19680614.html",
    "https://allfamous.org/people/ben-ebbrell-19870614.html",
    "https://allfamous.org/people/tash-sultana-19950614.html",
    "https://allfamous.org/people/chloe-ayling-19970614.html",
    "https://allfamous.org/people/nyanners-20070614.html",
    "https://allfamous.org/people/sarah-nagel-19910614.html",
    "https://allfamous.org/people/highkeyalina-msey.html",
    "https://allfamous.org/people/achanceofcosplay-19980614.html",
    "https://allfamous.org/people/marla-gibbs-19310614.html",
    "https://allfamous.org/people/gigi-ryan-20060614.html",
    "https://allfamous.org/people/mia-miskulin-20050614.html",
    "https://allfamous.org/people/steffi-graf-19690614.html",
    "https://allfamous.org/people/jaylon-smith-19950614.html",
    "https://allfamous.org/people/louis-garrel-19830614.html",
    "https://allfamous.org/people/jake-pettit-20080614.html",
    "https://allfamous.org/people/giulia-benite-20080614.html",
    "https://allfamous.org/people/felix-pacaut-20000614.html",
    "https://allfamous.org/people/blake-english-19940614.html",
    "https://allfamous.org/people/pascale-hutton-19790614.html",
    "https://allfamous.org/people/marco-soriano-19740614.html",
    "https://allfamous.org/people/jeffy-wing-20020614.html",
    "https://allfamous.org/people/fdefifa-19870614.html",
    "https://allfamous.org/people/jordyn-woodruff-frj4.html",
    "https://allfamous.org/people/val-valentino-19560614.html",
    "https://allfamous.org/people/griffin-kane-20030614.html",
    "https://allfamous.org/people/teona-flemino-20040614.html",
    
    "https://allfamous.org/people/kenan-harkin-19740614.html",
    "https://allfamous.org/people/dayo-okeniyi-19880614.html",
    "https://allfamous.org/people/tyler-obrien-19940614.html",
    "https://allfamous.org/people/danielle-soibelman-19990614.html",
    "https://allfamous.org/people/vassilios-bitsas-19990614.html",
    "https://allfamous.org/people/consequence-19770614.html",
    "https://allfamous.org/people/chauncey-leopardi-19810614.html",
    "https://allfamous.org/people/molly-parker-19720614.html",
    "https://allfamous.org/people/rob-chapman-19750614.html",
    "https://allfamous.org/people/tyler-johnston-19870614.html",
    "https://allfamous.org/people/erika-bierman-20010614.html",
    "https://allfamous.org/people/alexa-payton-20090614.html",
    "https://allfamous.org/people/portia-beaman-19870614.html",
    "https://allfamous.org/people/dapper-laughs-19900614.html",
    "https://allfamous.org/people/dnpnl-19980614.html",
    "https://allfamous.org/people/omer-bhatti-19850614.html",
    "https://allfamous.org/people/chris-milligan-19880614.html",
    "https://allfamous.org/people/thomaz-costa-20000614.html",
    "https://allfamous.org/people/weston-dressler-19850614.html",
    "https://allfamous.org/people/chris-ryan-19960614.html",
    "https://allfamous.org/people/sullivan-stapleton-19770614.html",
    "https://allfamous.org/people/taylor-johnston-19960614.html",
    "https://allfamous.org/people/tori-brooks-19920614.html",
    "https://allfamous.org/people/grace-west-20030614.html",
    "https://allfamous.org/people/jamie-foy-19960614.html",
    "https://allfamous.org/people/julian-cullen-19980614.html",
    "https://allfamous.org/people/gigi-paris-19920614.html",
    "https://allfamous.org/people/celeste-desjardins-19960614.html",
    "https://allfamous.org/people/stefania-ferrario-19930614.html",
    "https://allfamous.org/people/davi-freire-19970614.html",
    "https://allfamous.org/people/ardian-bora-19920614.html",
    "https://allfamous.org/people/jimena-aguilar-19970614.html",
    "https://allfamous.org/people/callum-mcgregor-19930614.html",
    "https://allfamous.org/people/maddox-weedle-20090614.html",
    "https://allfamous.org/people/reagan-gresham-19990614.html",
    "https://allfamous.org/people/blair-madamba-youtube-star.html",
    "https://allfamous.org/people/sambuchalul-gyy5.html",
    "https://allfamous.org/people/niki-ang-19930614.html",
    "https://allfamous.org/people/tami-chynn-19840614.html",
    "https://allfamous.org/people/ashley-johnston-19960614.html",
    "https://allfamous.org/people/eric-petersen-19810614.html",
    "https://allfamous.org/people/tmfaisal-tvju.html",
    "https://allfamous.org/people/lexi-babe-19940614.html",
    "https://allfamous.org/people/osvaldo-benavides-19790614.html",
    "https://allfamous.org/people/chi-pu-19930614.html",
    "https://allfamous.org/people/jack-miller-19610614.html",
    "https://allfamous.org/people/dj-marky-19750614.html",
    "https://allfamous.org/people/traylor-howard-19660614.html",
    
    "https://allfamous.org/people/cameron-russell-19870614.html",
    "https://allfamous.org/people/annia-hatch-19780614.html",
    "https://allfamous.org/people/laurence-rickard-19750614.html",
    "https://allfamous.org/people/julia-anastasopoulos-19830614.html",
    "https://allfamous.org/people/teila-tuli-19690614.html",
    "https://allfamous.org/people/dylan-mcnairn-20010614.html",
    "https://allfamous.org/people/ryan-buck-20010614.html",
    "https://allfamous.org/people/daniel-newman-19810614.html",
    "https://allfamous.org/people/cameron-bourgeois-tiktok-star.html",
    "https://allfamous.org/people/darien-townsend-19940614.html",
    "https://allfamous.org/people/king-diamond-19560614.html",
    "https://allfamous.org/people/paolo-bonolis-19610614.html",
    "https://allfamous.org/people/amelia-temple-19990614.html",
    "https://allfamous.org/people/hampton-yount-19920614.html",
    "https://allfamous.org/people/haley-hudson-19860614.html",
    "https://allfamous.org/people/kyle-herbert-19690614.html",
    "https://allfamous.org/people/alexandra-savior-19950614.html",
    "https://allfamous.org/people/alia-zaita-anuj.html",
    "https://allfamous.org/people/lynda-lopez-19710614.html",
    "https://allfamous.org/people/marcus-miller-19590614.html",
    "https://allfamous.org/people/brinney-19960614.html",
    "https://allfamous.org/people/onagonfaus-20060614.html",
    "https://allfamous.org/people/starrah-19900614.html",
    "https://allfamous.org/people/chelsey-white-19900614.html",
    "https://allfamous.org/people/bryan-breeze-19910614.html",
    "https://allfamous.org/people/laylah-nevaeh-gutierrez-20070614.html",
    "https://allfamous.org/people/paola-minerva-19980614.html",
    "https://allfamous.org/people/anass-moumen-19980614.html",
    "https://allfamous.org/people/peter-madrigal-19840614.html",
    "https://allfamous.org/people/laquon-treadwell-19950614.html",
    "https://allfamous.org/people/oliver-sim-19900614.html",
    "https://allfamous.org/people/madison-kirk-20050614.html",
    "https://allfamous.org/people/saaya-hayashida-19900614.html",
    "https://allfamous.org/people/eric-william-morris-19820614.html",
    "https://allfamous.org/people/courtney-halverson-19890614.html",
    "https://allfamous.org/people/kyle-smith-19660614.html",
    "https://allfamous.org/people/lilia-braun-19960614.html",
    "https://allfamous.org/people/evan-sabara-19920614.html",
    "https://allfamous.org/people/kevin-fonteyne-19900614.html",
    "https://allfamous.org/people/jr-martinez-19830614.html",
    "https://allfamous.org/people/lindsay-perr-20030614.html",
    "https://allfamous.org/people/frank-clark-19930614.html",
    "https://allfamous.org/people/mona-simpson-19570614.html",
    "https://allfamous.org/people/emily-graslie-19890614.html",
    "https://allfamous.org/people/joshua-holbrook-19920614.html",
    "https://allfamous.org/people/protoje-19810614.html",
    "https://allfamous.org/people/will-patton-19540614.html",
    "https://allfamous.org/people/kennedy-power-20020614.html",
    
    "https://allfamous.org/people/katie-yeager-19930614.html",
    "https://allfamous.org/people/meaghan-mattei-8kzm.html",
    "https://allfamous.org/people/alyssa-hart-19920614.html",
    "https://allfamous.org/people/diana-estrada-19970614.html",
    "https://allfamous.org/people/heather-mcdonald-19700614.html",
    "https://allfamous.org/people/campbell-brown-19680614.html",
    "https://allfamous.org/people/tallulah-milligan-20040614.html",
    "https://allfamous.org/people/jillian-anderson-19890614.html",
    "https://allfamous.org/people/kostas-manolas-19910614.html",
    "https://allfamous.org/people/jon-carrothers-19970614.html",
    "https://allfamous.org/people/tuzuyu-19990614.html",
    "https://allfamous.org/people/sean-klitzner-19830614.html",
    "https://allfamous.org/people/christian-rayt-carreon-19950614.html",
    "https://allfamous.org/people/mgfcustoms-19970614.html",
    "https://allfamous.org/people/natalie-weaver-19960614.html",
    "https://allfamous.org/people/emil-christensen-19840614.html",
    "https://allfamous.org/people/sarba-bhattacharjee-20010614.html",
    "https://allfamous.org/people/sam-perkins-19610614.html",
    "https://allfamous.org/people/andre-carrillo-19910614.html",
    "https://allfamous.org/people/maddi-waterhouse-19990614.html",
    "https://allfamous.org/people/rabia-chaudry-19740614.html",
    "https://allfamous.org/people/jamie-greenberg-19770614.html",
    "https://allfamous.org/people/gianna-nannini-19560614.html",
    "https://allfamous.org/people/eudoxie-yao-ehpq.html",
    "https://allfamous.org/people/diablo-cody-19780614.html",
    "https://allfamous.org/people/bindu-madhavi-19860614.html",
    "https://allfamous.org/people/brybry-19930614.html",
    "https://allfamous.org/people/allie-kay-u6jt.html",
    "https://allfamous.org/people/jena-gogo-19890614.html",
    "https://allfamous.org/people/matias-novoa-19800614.html",
    "https://allfamous.org/people/andrew-cogliano-19870614.html",
    "https://allfamous.org/people/ray-luzier-19700614.html",
    "https://allfamous.org/people/siobhan-donaghy-19840614.html",
    "https://allfamous.org/people/kevin-rivas-20000614.html",
    "https://allfamous.org/people/skyla-williams-20160614.html",
    "https://allfamous.org/people/darko-ropin-19960614.html",
    "https://allfamous.org/people/charlette-bree-19890614.html",
    "https://allfamous.org/people/demi-louise-19930614.html",
    "https://allfamous.org/people/rambo-amadeus-19630614.html",
    "https://allfamous.org/people/kim-schifino-19820614.html",
    "https://allfamous.org/people/ashton-pienaar-19890614.html",
    "https://allfamous.org/people/pritam-chakraborty-19710614.html",
    "https://allfamous.org/people/anahi-de-cardenas-19830614.html",
    "https://allfamous.org/people/cassia-tavares-19910614.html",
    "https://allfamous.org/people/grace-jackson-19610614.html",
    "https://allfamous.org/people/lupe-cuevas-19940614.html",
    "https://allfamous.org/people/nick-van-eede-19580614.html",
    "https://allfamous.org/people/tara-dennis-19690614.html",
    
    "https://allfamous.org/people/north-west-20130615.html",
    "https://allfamous.org/people/wolfie-19930615.html",
    "https://allfamous.org/people/sissy-sheridan-20040615.html",
    "https://allfamous.org/people/ice-cube-19690615.html",
    "https://allfamous.org/people/garrett-watts-19890615.html",
    "https://allfamous.org/people/courteney-cox-19640615.html",
    "https://allfamous.org/people/mohamed-salah-19920615.html",
    "https://allfamous.org/people/neil-patrick-harris-19730615.html",
    "https://allfamous.org/people/ree-kid-20060615.html",
    "https://allfamous.org/people/dani-calleiro-20000615.html",
    "https://allfamous.org/people/aurora-aksnes-19960615.html",
    "https://allfamous.org/people/bayley-19890615.html",
    "https://allfamous.org/people/mark-williams-19890615.html",
    "https://allfamous.org/people/little-carly-19890615.html",
    "https://allfamous.org/people/rose-dix-19880615.html",
    "https://allfamous.org/people/lexi-rabe-20120615.html",
    "https://allfamous.org/people/nolimitjay-oxf9.html",
    "https://allfamous.org/people/isaiah-morgan-20060615.html",
    "https://allfamous.org/people/m3rkmus1c-19950615.html",
    "https://allfamous.org/people/geko-19970615.html",
    "https://allfamous.org/people/justin-fletcher-19700615.html",
    "https://allfamous.org/people/cody-saintgnue-19930615.html",
    "https://allfamous.org/people/piper-leblanc-20130615.html",
    "https://allfamous.org/people/leah-remini-19700615.html",
    "https://allfamous.org/people/madison-kocian-19970615.html",
    "https://allfamous.org/people/leli-hernandez-19950615.html",
    "https://allfamous.org/people/bali-baby-19970615.html",
    "https://allfamous.org/people/nicholas-laws-19950615.html",
    "https://allfamous.org/people/beatrice-vendramin-20000615.html",
    "https://allfamous.org/people/nadine-coyle-19850615.html",
    "https://allfamous.org/people/yassuo-19990615.html",
    "https://allfamous.org/people/xi-jinping-19530615.html",
    "https://allfamous.org/people/cat-von-k-19950615.html",
    "https://allfamous.org/people/hoshi-19960615.html",
    "https://allfamous.org/people/lindsay-webster-19930615.html",
    "https://allfamous.org/people/caelynn-miller-keyes-19950615.html",
    "https://allfamous.org/people/yeosang-19990615.html",
    "https://allfamous.org/people/parker-mccollum-19920615.html",
    "https://allfamous.org/people/itzcrystal-snow-20050615.html",
    "https://allfamous.org/people/landen-taylor-20050615.html",
    "https://allfamous.org/people/helen-hunt-19630615.html",
    "https://allfamous.org/people/lil-pete-19960615.html",
    "https://allfamous.org/people/marije-zuurveld-19980615.html",
    "https://allfamous.org/people/elise-strachan-19830615.html",
    "https://allfamous.org/people/jack-atkins-8dgm.html",
    "https://allfamous.org/people/nathan-20000615.html",
    "https://allfamous.org/people/liam-clover-20040615.html",
    "https://allfamous.org/people/sterling-jerins-20040615.html",
    
    "https://allfamous.org/people/kibo-lee-19970615.html",
    "https://allfamous.org/people/merk-19930615.html",
    "https://allfamous.org/people/avalon-nadfalusi-20000615.html",
    "https://allfamous.org/people/eileen-davidson-19590615.html",
    "https://allfamous.org/people/ben-taylor-19890615.html",
    "https://allfamous.org/people/leeky-20000615.html",
    "https://allfamous.org/people/ell-cartoons-19900615.html",
    "https://allfamous.org/people/swaghollywood-19930615.html",
    "https://allfamous.org/people/kaemor-19960615.html",
    "https://allfamous.org/people/karolyne-day-20010615.html",
    "https://allfamous.org/people/jay-ajayi-19930615.html",
    "https://allfamous.org/people/alistairz-20010615.html",
    "https://allfamous.org/people/jacqueline-harris-20020615.html",
    "https://allfamous.org/people/ahmad-aburob-19970615.html",
    "https://allfamous.org/people/wayne-sermon-19840615.html",
    "https://allfamous.org/people/austin-augie-19920615.html",
    "https://allfamous.org/people/jim-belushi-19540615.html",
    "https://allfamous.org/people/shahd-batal-19960615.html",
    "https://allfamous.org/people/karla-espinosa-gallardo-19970615.html",
    "https://allfamous.org/people/youssof-altoukhi-levq.html",
    "https://allfamous.org/people/silent-princess-20060615.html",
    "https://allfamous.org/people/galilea-la-salvia-20030615.html",
    "https://allfamous.org/people/poppy-montgomery-19720615.html",
    "https://allfamous.org/people/lisa-rhee-19950615.html",
    "https://allfamous.org/people/jefferson-festus-20050615.html",
    "https://allfamous.org/people/stjepan-hauser-19860615.html",
    "https://allfamous.org/people/brooklyn-moss-instagram-star.html",
    "https://allfamous.org/people/mycah-pittman-20000615.html",
    "https://allfamous.org/people/judah-bellamy-20000615.html",
    "https://allfamous.org/people/jamie-hehner-19860615.html",
    "https://allfamous.org/people/padraig-cahill-20020615.html",
    "https://allfamous.org/people/jake-busey-19710615.html",
    "https://allfamous.org/people/deedee-freeman-19630615.html",
    "https://allfamous.org/people/arianna-tienda-20100615.html",
    "https://allfamous.org/people/keep-calm-and-blush-on-19910615.html",
    "https://allfamous.org/people/tonyd2wild-19910615.html",
    "https://allfamous.org/people/chelsie-padley-19910615.html",
    "https://allfamous.org/people/poorboysin-19900615.html",
    "https://allfamous.org/people/gary-lightbody-19760615.html",
    "https://allfamous.org/people/freek-da-gemini-19990615.html",
    "https://allfamous.org/people/jaelynn-meis-20090615.html",
    "https://allfamous.org/people/ella-wahlestedt-19960615.html",
    "https://allfamous.org/people/sophie-doucet-nqsq.html",
    "https://allfamous.org/people/nana-ou-yang-20000615.html",
    "https://allfamous.org/people/erick-gutierrez-19950615.html",
    "https://allfamous.org/people/amanda-jane-cooper-19880615.html",
    "https://allfamous.org/people/leanna-firestone-e6jg.html",
    "https://allfamous.org/people/han-yoo-ra-19950615.html",
    
    "https://allfamous.org/people/robert-frank-19780615.html",
    "https://allfamous.org/people/sarah-andersen-19920615.html",
    "https://allfamous.org/people/real-life-lore-19930615.html",
    "https://allfamous.org/people/ally-serigne-19990615.html",
    "https://allfamous.org/people/alexa-skoros-youtube-star.html",
    "https://allfamous.org/people/emma-miller-19920615.html",
    "https://allfamous.org/people/mianne-grace-fajardo-20040615.html",
    "https://allfamous.org/people/destiny-jones-19940615.html",
    "https://allfamous.org/people/alice-englert-19940615.html",
    "https://allfamous.org/people/oliver-kahn-19690615.html",
    "https://allfamous.org/people/cooper-kupp-19930615.html",
    "https://allfamous.org/people/jesus-kardashian-19960615.html",
    "https://allfamous.org/people/luke-hodge-19840615.html",
    "https://allfamous.org/people/hachim-mastour-19980615.html",
    "https://allfamous.org/people/azura-19980615.html",
    "https://allfamous.org/people/alice-llani-bender-rmbd.html",
    "https://allfamous.org/people/tim-lincecum-19840615.html",
    "https://allfamous.org/people/kaleb-anthony-19880615.html",
    "https://allfamous.org/people/simon-callow-19490615.html",
    "https://allfamous.org/people/tiara-asaski-20000615.html",
    "https://allfamous.org/people/andrew-metivier-tiktok-star.html",
    "https://allfamous.org/people/thellamasir-19970615.html",
    "https://allfamous.org/people/vania-delicia-19970615.html",
    "https://allfamous.org/people/frgroot-gqzt.html",
    "https://allfamous.org/people/taylor-williamson-19860615.html",
    "https://allfamous.org/people/cookie-cutter-2t2r.html",
    "https://allfamous.org/people/sven-ruygrok-19910615.html",
    "https://allfamous.org/people/carolina-ravassa-19850615.html",
    "https://allfamous.org/people/valorie-pisula-20030615.html",
    "https://allfamous.org/people/david-bullock-19930615.html",
    "https://allfamous.org/people/joe-clark-19390615.html",
    "https://allfamous.org/people/rachel-covey-19980615.html",
    "https://allfamous.org/people/lil-flyer-19960615.html",
    "https://allfamous.org/people/arkimed-lushaj-19860615.html",
    "https://allfamous.org/people/dafne-schippers-19920615.html",
    "https://allfamous.org/people/inaki-williams-19940615.html",
    "https://allfamous.org/people/keilah-k-jivd.html",
    "https://allfamous.org/people/taylor-morgan-19910615.html",
    "https://allfamous.org/people/robert-hampton-19870615.html",
    "https://allfamous.org/people/brett-hundley-19930615.html",
    "https://allfamous.org/people/bardo-ellens-19920615.html",
    "https://allfamous.org/people/michael-laudrup-19640615.html",
    "https://allfamous.org/people/bewhy-19930615.html",
    "https://allfamous.org/people/rob-mcclure-19820615.html",
    "https://allfamous.org/people/maya-20110615.html",
    "https://allfamous.org/people/noddy-holder-19460615.html",
    "https://allfamous.org/people/julian-martinez-19980615.html",
    "https://allfamous.org/people/carl-thomas-19720615.html",
    
    "https://allfamous.org/people/mangozut-19990615.html",
    "https://allfamous.org/people/raimonds-vejonis-19660615.html",
    "https://allfamous.org/people/eli-mayfield-19970615.html",
    "https://allfamous.org/people/wade-boggs-19580615.html",
    "https://allfamous.org/people/boone-jenner-19930615.html",
    "https://allfamous.org/people/mia-scholink-19970615.html",
    "https://allfamous.org/people/greg-vaughan-19730615.html",
    "https://allfamous.org/people/michael-duggar-20110615.html",
    "https://allfamous.org/people/dickerson-ross-19890615.html",
    "https://allfamous.org/people/nevena-bozovic-19940615.html",
    "https://allfamous.org/people/skye-labutte-20040615.html",
    "https://allfamous.org/people/santiago-talledo-19890615.html",
    "https://allfamous.org/people/dana-bash-19710615.html",
    "https://allfamous.org/people/natasha-smoot-19900615.html",
    "https://allfamous.org/people/dalia-yegavian-19980615.html",
    "https://allfamous.org/people/julie-hagerty-19550615.html",
    "https://allfamous.org/people/james-davis-19830615.html",
    "https://allfamous.org/people/lil-cemo-xwnk.html",
    "https://allfamous.org/people/alisa-summers-19880615.html",
    "https://allfamous.org/people/jennifer-l-holm-19680615.html",
    "https://allfamous.org/people/makel-19980615.html",
    "https://allfamous.org/people/daniel-vegas-19970615.html",
    "https://allfamous.org/people/david-wilson-19910615.html",
    "https://allfamous.org/people/mikaela-happas-19960615.html",
    "https://allfamous.org/people/daria-jane-19980615.html",
    "https://allfamous.org/people/carolina-marin-19930615.html",
    "https://allfamous.org/people/bianna-golodryga-19780615.html",
    "https://allfamous.org/people/terrell-forde-20010615.html",
    "https://allfamous.org/people/chloe-cori-19940615.html",
    "https://allfamous.org/people/stephen-lloyd-19570615.html",
    "https://allfamous.org/people/kactus-20000615.html",
    "https://allfamous.org/people/alex-crockford-19900615.html",
    "https://allfamous.org/people/scrimzox-mauv.html",
    "https://allfamous.org/people/kim-young-woo-19840615.html",
    "https://allfamous.org/people/sophia-polos-20030615.html",
];

const app = express()
const port = 3000;
app.get('/', (req, res) => {
        res.header("Content-Type",'application/json');
        res.type('json').send(JSON.stringify(tables, null, 2) + '\n');
   
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
 

requestOne = [];
 
init = 0;  
for(j = 0; j < queue.length; j++) {
 item =   queue[j];
 console.log(item);
 req_url = encodeURI(item);      
 requestOne[init] = axios.get(req_url);  
 init++;

}
 
var tables = [];
 var s = 0;
axios.all(requestOne).then(
axios.spread((...responses) => {
for (let i = 0; i < responses.length; i++) {

const $ = cheerio.load(responses[i].data)
 
table = {};
s = s+i;

 
 celeb_name = $('#name')[0].childNodes[0].data;
 celeb_profession = $('.prof-main').text();
 cleb_date_month_birthday = $('h2.tabs-name a').attr('href').replace('/birthday/','');

cleb_facts = [];
death_year = birth_year = zodaic_sign = birth_place_country_or_state = birth_place_city = death_day_mnth = '';

urlKey = responses[i].request.path.trim();
table['url_key_of_scrapping_page'] = urlKey;
 
name_identifier_by_number = Math.abs(Math.floor(1000 + Math.random() * 9000));
table['name_identifier_by_number'] = name_identifier_by_number;
table['url_slug_people'] = celeb_name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') +'-' + name_identifier_by_number;

faq = {};
faq['lable'] = [];
faq['value'] = [];
// $ns = $('h3[data-id^="faq_"]');
// if($ns.length > 0){
//   shuffle($ns).each(function(i, v) {
//        faq['lable'] .push($(this).text());
//        faq['value'].push($(this).next('p').html());
//   });
// }
 
table['faq'] = faq;

 
about = {};
about['heading'] = [];
about['description'] = [];
 
// $('#bio').children('h2').each(function(i, v) {
//      about['heading'].push($(this).text());
//      about['description'].push($(this).next('p').html());
// });

// table['about'] = about;
 
// if($('#about').parent('h2').prev().hasClass('ad-box')) {
// table['wiki_desc'] = '';
 
// }else if($('#about').parent('h2').prev('table').hasClass('wikibox')){

//   htmlTable = '';
//   if($('#about').parent('h2').prev('table').prev('div').not('.ad-box').length) {
//     htmlTable += '<p>' + $('#about').parent('h2').prev('table').prev('div').html() +'</p>';
//   }
 
//  htmlTable += '<table id="extra_desc_wk" class="table table-bordered"><tbody>';
 
//    $c = $('#about').parent('h2').prev('table').find('tr');
//    shuffle($c).each(function(i, v) {
//       htmlTable += '<tr><td class="label-tb">' + $(this).children('td.wk_label').text() + '</td><td class="label-val">' + $(this).children('td.wk_value').text() + '</td></tr>';
// })
//   htmlTable += '</tbody></table>';

//   table['wiki_desc'] = htmlTable;
 
// }else {
//    table['wiki_desc'] = '<p>' +$('#about').parent('h2').prev('div').html() +'</p>';
// }
 
celeb_wiki_img_post_url = $('figure.img-post img').attr('data-src');

table['wikiimage'] = '';
 
if(celeb_wiki_img_post_url) {

   var str = celeb_name;
   str_img_name = table['url_slug_people'];
 
      (async () => {
      var new_img_name_created = 'wiki-' + str_img_name + "-"+ i +'';

      const downloader = new Downloader({
        url: ""+celeb_wiki_img_post_url+"",
        fileName: new_img_name_created+'.jpg',
        cloneFiles: false,
        skipExistingFileName : true,
        timeout: 100000,
        directory: "./wiki-images",  
        onBeforeSave: (deducedName) => {
          console.log(`The file name is: ${deducedName}`);
        },
      });

        table['wikiimage'] =  new_img_name_created+'.jpg';

      try {
        await downloader.download();
      } catch (error) {
        console.log(error);
      }
    })();
}

 
 // $('#facts .fitem').each(function(i, v) {

 //   cleb_facts['label'] = $(this).find('.flab').text().trim() ;
 //   cleb_facts['value'] = $(this).find('.fval').text().trim() ;
   
 //   if(cleb_facts['label'] == 'Birthday') {
 //     birth_year = $(this).find('.fval a.hu').text();
 //     return;
 //   }

 //  if(cleb_facts['label'] == 'Death day') {
 //      death_day_mnth = $(this).find('.fval a').eq(0).text();
 //      death_year = $(this).find('.fval a').eq(1).text();  
 //      return;
 //   }

 //   if(cleb_facts['label'] == 'Birthplace') {

 //     place_type = $(this).find('.fval a').eq(0).attr('href');


 //     if($(this).find('.fval a').length == 1) {
       
 //      if(place_type.indexOf('city') !== -1) {
 //        birth_place_city = $(this).find('.fval a').eq(0).text().trim();
 //      }
 //      if(place_type.indexOf('birthplace') !== -1) {
 //         birth_place_country_or_state = $(this).find('.fval a').eq(0).text().trim();
 //      }
 //     }

 //      if($(this).find('.fval a').length == 2) {
       
 //        if(place_type.indexOf('city') !== -1) {
 //          birth_place_city = $(this).find('.fval a').eq(0).text().trim();
 //        }

 //         if($(this).find('.fval a').eq(1).attr('href').indexOf('birthplace') !== -1) {
 //            birth_place_country_or_state = $(this).find('.fval a').eq(1).text().trim();
 //        }
 //      }
     
 //   }

 //    if(cleb_facts['label'] == 'Zodiac Sign') {
 //      zodaic_sign = $(this).find('.fval').text().trim();
 //      return;
 //   }
   
 // });



  imgs_att_data = [];
  table['imgs_att_data'] = [];
  celeb_images = $('.slidershow').children('div').find('img');

  var str = table['url_slug_people'];
  str_img_name = str;

  celeb_images.each(function(i, v) {
     // if(i > 5) {return;}
      img = $(this).attr('data-src');

    if(img.includes('default.svg')) {
      return;
    }
 
    (async () => {
      var new_img_name_created = str_img_name + "-"+ i +'';

      const downloader = new Downloader({
        url: ""+img+"",
        fileName: new_img_name_created+'.jpg',
        cloneFiles: false,
        skipExistingFileName : true,
        timeout: 100000,
        directory: "./images", //Sub directories will also be automatically created if they do not exist.
        onBeforeSave: (deducedName) => {
          console.log(`The file name is: ${deducedName}`);
          //If you return a string here, it will be used as the name(that includes the extension!).
        },
      });
        imgs_att_data.push(new_img_name_created+'.jpg');

        table['imgs_att_data'] =  imgs_att_data;

      try {
        await downloader.download();
      } catch (error) {
        console.log(error);
      }
    })();

 
  })



 
 table['name'] =  celeb_name;  
 table['profession'] =  celeb_profession;
 table['birthday'] = cleb_date_month_birthday;  
 table['birth_year'] = birth_year;
 table['death_year'] = death_year;
 table['death_day_mnth'] = death_day_mnth;
 table['birth_place_country_or_state'] =  birth_place_country_or_state;
 table['birth_place_city'] =  birth_place_city;
 table['zodaic_sign'] =  zodaic_sign;
  tables.push(table) ;
console.log(tables);  
}
   // console.log(`$quotes['oscar-wilde'] = ${JSON.stringify(table)}`);
})
).catch((errors) => {
    console.error(errors, ': Error');
});



function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
