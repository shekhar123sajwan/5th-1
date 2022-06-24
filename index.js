 
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
   "https://allfamous.org/people/carlos-acosta-tiktok-star.html",
    "https://allfamous.org/people/matt-helders-19860507.html",
    "https://allfamous.org/people/gaurav-chaudhary-19910507.html",
    "https://allfamous.org/people/earl-thomas-19890507.html",
    "https://allfamous.org/people/kassidy-king-20010507.html",
    "https://allfamous.org/people/russell-dickerson-19870507.html",
    "https://allfamous.org/people/erica-fernandes-19930507.html",
    "https://allfamous.org/people/pho3n1x-19910507.html",
    
    "https://allfamous.org/people/aidy-bryant-19870507.html",
    "https://allfamous.org/people/dana-ward-19930507.html",
    "https://allfamous.org/people/vlad-reiser-19930507.html",
    "https://allfamous.org/people/hassan-mahone-20010507.html",
    "https://allfamous.org/people/josh-carroll-19900507.html",
    "https://allfamous.org/people/sierra-lewis-19910507.html",
    "https://allfamous.org/people/bang-ye-dam-20020507.html",
    "https://allfamous.org/people/nila-grier-19760507.html",
    "https://allfamous.org/people/anna-johnston-20000507.html",
    "https://allfamous.org/people/wednesday-grint-20200507.html",
    "https://allfamous.org/people/emmaxolouise-20040507.html",
    "https://allfamous.org/people/alex-ikonn-19870507.html",
    "https://allfamous.org/people/brandon-jones-19880507.html",
    "https://allfamous.org/people/jonathan-miller-19870507.html",
    "https://allfamous.org/people/breckin-meyer-19740507.html",
    "https://allfamous.org/people/filip-ronaj-20020507.html",
    "https://allfamous.org/people/anaya-cheyenne-youtube-star.html",
    "https://allfamous.org/people/gizele-oliveira-19930507.html",
    "https://allfamous.org/people/p-lo-19910507.html",
    "https://allfamous.org/people/khloe-terae-19930507.html",
    "https://allfamous.org/people/daniella-shaba-20010507.html",
    "https://allfamous.org/people/porsche-vrp-19980507.html",
    "https://allfamous.org/people/james-eubanks-19920507.html",
    "https://allfamous.org/people/brandon-baum-19990507.html",
    "https://allfamous.org/people/natalie-ganzhorn-19980507.html",
    "https://allfamous.org/people/jeff-johnson-19730507.html",
    "https://allfamous.org/people/hannah-deeprose-19990507.html",
    "https://allfamous.org/people/tankmatt-19930507.html",
    "https://allfamous.org/people/lauren-isenberg-20020507.html",
    "https://allfamous.org/people/aniyah-cossey-20010507.html",
    "https://allfamous.org/people/leonardo-edwin-20010507.html",
    "https://allfamous.org/people/jeremy-scheck-20000507.html",
    "https://allfamous.org/people/traci-lords-19680507.html",
    "https://allfamous.org/people/marina-mazepa-19970507.html",
    "https://allfamous.org/people/talita-von-furstenberg-19990507.html",
    "https://allfamous.org/people/lydia-barakat-19880507.html",
    "https://allfamous.org/people/jakub-winter-19970507.html",
    "https://allfamous.org/people/barbara-durso-19570507.html",
    "https://allfamous.org/people/malcolm-freberg-19860507.html",
    "https://allfamous.org/people/troy-field-20000507.html",
    "https://allfamous.org/people/maria-garcia-19910507.html",
    "https://allfamous.org/people/janina-fialkowska-19510507.html",
    "https://allfamous.org/people/lela-loren-19800507.html",
    "https://allfamous.org/people/graziano-di-prima-19940507.html",
    "https://allfamous.org/people/devlin-19890507.html",
    "https://allfamous.org/people/lexa-moedano-20010507.html",
    "https://allfamous.org/people/briana-lacuesta-19920507.html",
    "https://allfamous.org/people/atharvaa-19890507.html",
    
    "https://allfamous.org/people/rebecca-louise-smith-19880507.html",
    "https://allfamous.org/people/syuhaila-rzm-19990507.html",
    "https://allfamous.org/people/maya-erskine-19870507.html",
    "https://allfamous.org/people/charlie-elena-carrasco-20200507.html",
    "https://allfamous.org/people/dallas-macdermant-19950507.html",
    "https://allfamous.org/people/will-ospreay-19930507.html",
    "https://allfamous.org/people/rio-penavega-ct4a.html",
    "https://allfamous.org/people/shawn-marion-19780507.html",
    "https://allfamous.org/people/desto-dubb-19880507.html",
    "https://allfamous.org/people/jamie-rahn-19880507.html",
    "https://allfamous.org/people/pandora-vanderpump-19860507.html",
    "https://allfamous.org/people/dylan-gelula-19940507.html",
    "https://allfamous.org/people/raina-19890507.html",
    "https://allfamous.org/people/katie-douglas-19790507.html",
    "https://allfamous.org/people/jonathan-beck-19980507.html",
    "https://allfamous.org/people/weirdaneer-8p1u.html",
    "https://allfamous.org/people/rueben-randle-19910507.html",
    "https://allfamous.org/people/kezia-clarita-20010507.html",
    "https://allfamous.org/people/rosalie-lessard-19940507.html",
    "https://allfamous.org/people/gregorio-pernia-19700507.html",
    "https://allfamous.org/people/chlo-hisoka-tiktok-star.html",
    "https://allfamous.org/people/kaleb-ohlemacher-20010507.html",
    "https://allfamous.org/people/tyler-johnson-19920507.html",
    "https://allfamous.org/people/michael-knight-19590507.html",
    "https://allfamous.org/people/kayla-manning-19950507.html",
    "https://allfamous.org/people/melanie-da-cruz-19910507.html",
    "https://allfamous.org/people/simonne-renee-19890507.html",
    "https://allfamous.org/people/jacob-dever-xruk.html",
    "https://allfamous.org/people/isaac-garcia-19950507.html",
    "https://allfamous.org/people/sissy-nobby-19830507.html",
    "https://allfamous.org/people/anastasija-grujic-19990507.html",
    "https://allfamous.org/people/jack-thriller-19820507.html",
    "https://allfamous.org/people/paige-keeter-19900507.html",
    "https://allfamous.org/people/milana-gatto-20150507.html",
    "https://allfamous.org/people/eden-alal-20010507.html",
    "https://allfamous.org/people/aliyah-obrien-19810507.html",
    "https://allfamous.org/people/vikas-gupta-19870507.html",
    "https://allfamous.org/people/destiny-whitlock-20010507.html",
    "https://allfamous.org/people/jackie-perdue-19910507.html",
    "https://allfamous.org/people/chumel-torres-19820507.html",
    "https://allfamous.org/people/adrian-esteve-tiktok-star.html",
    "https://allfamous.org/people/mihaela-marinova-19980507.html",
    "https://allfamous.org/people/courtney-ann-19830507.html",
    "https://allfamous.org/people/haley-klinkhammer-19930507.html",
    "https://allfamous.org/people/debbie-anne-20050507.html",
    "https://allfamous.org/people/camacho-19830507.html",
    "https://allfamous.org/people/xavier-omar-19900507.html",
    "https://allfamous.org/people/kate-lawler-19800507.html",
    
    "https://allfamous.org/people/yony-20080507.html",
    "https://allfamous.org/people/taylor-wilson-19940507.html",
    "https://allfamous.org/people/adventurose17-19980507.html",
    "https://allfamous.org/people/giuliana-ava-19950507.html",
    "https://allfamous.org/people/alexa-dol-19930507.html",
    "https://allfamous.org/people/brandon-tan-19910507.html",
    "https://allfamous.org/people/maxwell-cotton-20000507.html",
    "https://allfamous.org/people/zony-20080507.html",
    "https://allfamous.org/people/michael-brookhouse-19900507.html",
    "https://allfamous.org/people/skyla-novea-19940507.html",
    "https://allfamous.org/people/jaheeim-20010507.html",
    "https://allfamous.org/people/asghar-farhadi-19720507.html",
    "https://allfamous.org/people/grace-drummond-20040507.html",
    "https://allfamous.org/people/pink-ward-19960507.html",
    "https://allfamous.org/people/jack-phillips-20030507.html",
    "https://allfamous.org/people/stunna-june-19930507.html",
    "https://allfamous.org/people/big-noyd-19750507.html",
    "https://allfamous.org/people/amyra-dastur-19930507.html",
    "https://allfamous.org/people/ethan-happ-19960507.html",
    "https://allfamous.org/people/jeff-adam-19940507.html",
    "https://allfamous.org/people/julian-stern-19980507.html",
    "https://allfamous.org/people/rxchie-19960507.html",
    "https://allfamous.org/people/tim-luca-schmidt-20090507.html",
    "https://allfamous.org/people/frenchie-davis-19790507.html",
    "https://allfamous.org/people/vedran-simunovic-19990507.html",
    "https://allfamous.org/people/kaka-sungura-19870507.html",
    "https://allfamous.org/people/miah-dhanani-20140507.html",
    "https://allfamous.org/people/jennifer-smith-19860507.html",
    "https://allfamous.org/people/jake-coco-19840507.html",
    "https://allfamous.org/people/mark-obrien-19840507.html",
    "https://allfamous.org/people/anies-baswedan-19690507.html",
    "https://allfamous.org/people/amanda-abbott-19860507.html",
    "https://allfamous.org/people/sharon-belle-19930507.html",
    "https://allfamous.org/people/morocco-omari-19750507.html",
    "https://allfamous.org/people/makano-19830507.html",
    "https://allfamous.org/people/michael-brooks-19700507.html",
    "https://allfamous.org/people/peter-reckell-19550507.html",
    "https://allfamous.org/people/michael-waddell-19730507.html",
    "https://allfamous.org/people/dana-patterson-19930507.html",
    "https://allfamous.org/people/gaby-g-19940507.html",
    "https://allfamous.org/people/chris-morgan-19790507.html",
    "https://allfamous.org/people/foxdrop-19930507.html",
    "https://allfamous.org/people/natalie-mejia-19880507.html",
    "https://allfamous.org/people/christy-moore-19450507.html",
    "https://allfamous.org/people/edan-alal-20000507.html",
    "https://allfamous.org/people/ajla-tomljanovic-19930507.html",
    "https://allfamous.org/people/jade-davies-19930507.html",
    "https://allfamous.org/people/elias-einarsson-20020507.html",
    
    "https://allfamous.org/people/scooter-ward-19700507.html",
    "https://allfamous.org/people/jessica-peraza-19980507.html",
    "https://allfamous.org/people/doug-benson-19640507.html",
    "https://allfamous.org/people/logan-mize-19850507.html",
    "https://allfamous.org/people/leileistar-20060507.html",
    "https://allfamous.org/people/curtis-rx-19790507.html",
    "https://allfamous.org/people/ivan-sergei-19710507.html",
    "https://allfamous.org/people/nassim-ssimou-19940507.html",
    "https://allfamous.org/people/bailey-johnston-20010507.html",
    "https://allfamous.org/people/alex-marshall-19590507.html",
    "https://allfamous.org/people/yasmin-wilshin-19960507.html",
    "https://allfamous.org/people/jake-barker-19850507.html",
    "https://allfamous.org/people/zahratul-jannah-6tmq.html",
    "https://allfamous.org/people/syu-haila-19990507.html",
    "https://allfamous.org/people/kay-cola-19850507.html",
    "https://allfamous.org/people/bianca-wilshin-19960507.html",
    "https://allfamous.org/people/chase-brown-19840507.html",
    "https://allfamous.org/people/ty-collins-20010507.html",
    "https://allfamous.org/people/fatimah-alansari-19910507.html",
    "https://allfamous.org/people/walter-frank-19700507.html",
    "https://allfamous.org/people/ruggero-deodato-19390507.html",
    "https://allfamous.org/people/narbeh-babakhani-20010507.html",
    "https://allfamous.org/people/thelma-houston-19460507.html",
    "https://allfamous.org/people/jesse-puljujarvi-19980507.html",
    "https://allfamous.org/people/arlenis-sosa-19890507.html",
    "https://allfamous.org/people/jim-titus-19810507.html",
    "https://allfamous.org/people/emily-stern-19830507.html",
    "https://allfamous.org/people/eagle-eye-cherry-19680507.html",
    "https://allfamous.org/people/steelorse-19890507.html",
    "https://allfamous.org/people/anais-pouliot-19910507.html",
    "https://allfamous.org/people/billy-fleming-19960507.html",
    "https://allfamous.org/people/monito-vidal-20090507.html",
    "https://allfamous.org/people/elle-towbridge-19960507.html",
    "https://allfamous.org/people/natalia-king-19920507.html",
    "https://allfamous.org/people/milena-tamburic-19910507.html",
    "https://allfamous.org/people/arbana-osmani-19830507.html",
    "https://allfamous.org/people/matt-gaetz-19820507.html",
    "https://allfamous.org/people/brian-kilmeade-19640507.html",
    "https://allfamous.org/people/mark-murray-19740507.html",
    "https://allfamous.org/people/steve-hansen-19590507.html",
    "https://allfamous.org/people/abigail-joy-19990507.html",
    "https://allfamous.org/people/amy-heckerling-19540507.html",
    "https://allfamous.org/people/levi-lusko-19820507.html",
    "https://allfamous.org/people/mike-ferri-19870507.html",
    "https://allfamous.org/people/yianna-terzi-19800507.html",
    "https://allfamous.org/people/daria-kasatkina-19970507.html",
    "https://allfamous.org/people/nicco-annan-19890507.html",
    "https://allfamous.org/people/martina-kenoia-pasqui-19950507.html",
    
    "https://allfamous.org/people/6ix9ine-19960508.html",
    "https://allfamous.org/people/trisha-paytas-19880508.html",
    "https://allfamous.org/people/ethan-wacker-20020508.html",
    "https://allfamous.org/people/stephen-amell-19810508.html",
    "https://allfamous.org/people/mars-20000508.html",
    "https://allfamous.org/people/enrique-iglesias-19750508.html",
    "https://allfamous.org/people/david-attenborough-19260508.html",
    "https://allfamous.org/people/pamibaby-20000508.html",
    "https://allfamous.org/people/marcel-cunningham-19900508.html",
    "https://allfamous.org/people/matthew-davis-19780508.html",
    "https://allfamous.org/people/chris-gilly-19970508.html",
    "https://allfamous.org/people/damian-gurrusquieta-20050508.html",
    "https://allfamous.org/people/kaden-fumblebottom-19980508.html",
    "https://allfamous.org/people/bepper-20010508.html",
    "https://allfamous.org/people/nikki-roumel-gqwh.html",
    "https://allfamous.org/people/kunno-20000508.html",
    "https://allfamous.org/people/nikki-roumeliotis-20000508.html",
    "https://allfamous.org/people/brenden-latarte-20010508.html",
    "https://allfamous.org/people/olivia-culpo-19920508.html",
    "https://allfamous.org/people/tyler-latarte-20010508.html",
    "https://allfamous.org/people/nyle-dimarco-19890508.html",
    "https://allfamous.org/people/too-poor-19930508.html",
    "https://allfamous.org/people/kemba-walker-19900508.html",
    "https://allfamous.org/people/brittanyrenee1989-19890508.html",
    "https://allfamous.org/people/desmond-dennis-19940508.html",
    "https://allfamous.org/people/camryn-cordova-tiktok-star.html",
    "https://allfamous.org/people/jensen-steel-20020508.html",
    "https://allfamous.org/people/gary-glitter-19440508.html",
    "https://allfamous.org/people/callum-jones-19960508.html",
    "https://allfamous.org/people/candace-nelson-19740508.html",
    "https://allfamous.org/people/aychristene-19880508.html",
    "https://allfamous.org/people/jeremy-jahns-19810508.html",
    "https://allfamous.org/people/colton-sopo-squad-20160508.html",
    "https://allfamous.org/people/chany-dakota-19960508.html",
    "https://allfamous.org/people/melissa-gilbert-19640508.html",
    "https://allfamous.org/people/kirletio-d1cm.html",
    "https://allfamous.org/people/jack-labrant-19980508.html",
    "https://allfamous.org/people/ana-mulvoy-ten-19920508.html",
    "https://allfamous.org/people/karen-gravano-19720508.html",
    "https://allfamous.org/people/adam-huber-19870508.html",
    "https://allfamous.org/people/carlos-alvarez-jr-20020508.html",
    "https://allfamous.org/people/anthony-field-19630508.html",
    "https://allfamous.org/people/katy-b-19890508.html",
    "https://allfamous.org/people/myles-oneal-19970508.html",
    "https://allfamous.org/people/dexter-black-19960508.html",
    "https://allfamous.org/people/bizzle-19980508.html",
    "https://allfamous.org/people/joaquin-bondoni-20030508.html",
    "https://allfamous.org/people/lauren-mae-19860508.html",
    
    "https://allfamous.org/people/faze-cbass-19940508.html",
    "https://allfamous.org/people/rally-reyes-bpna.html",
    "https://allfamous.org/people/elyes-gabel-19830508.html",
    "https://allfamous.org/people/mona-monica-kattan-19850508.html",
    "https://allfamous.org/people/adrian-gonzalez-19820508.html",
    "https://allfamous.org/people/sabrina-conroy-mxdf.html",
    "https://allfamous.org/people/soloin-20000508.html",
    "https://allfamous.org/people/matt-willis-19830508.html",
    "https://allfamous.org/people/logan-edra-20030508.html",
    "https://allfamous.org/people/laia-oli-19980508.html",
    "https://allfamous.org/people/alina-morse-20050508.html",
    "https://allfamous.org/people/krazyrabb1t-19960508.html",
    "https://allfamous.org/people/mia-shpirer-19980508.html",
    "https://allfamous.org/people/problem-19850508.html",
    "https://allfamous.org/people/evette-santos-19960508.html",
    "https://allfamous.org/people/nikkie-plessen-19850508.html",
    "https://allfamous.org/people/rizzy-black-20010508.html",
    "https://allfamous.org/people/mark-noble-19870508.html",
    "https://allfamous.org/people/alison-teal-cgjb.html",
    "https://allfamous.org/people/katte-19980508.html",
    "https://allfamous.org/people/bill-de-blasio-19610508.html",
    "https://allfamous.org/people/natalia-jimenez-20040508.html",
    "https://allfamous.org/people/yara-sofia-19840508.html",
    "https://allfamous.org/people/andimgone-19980508.html",
    "https://allfamous.org/people/aneurin-barnard-19870508.html",
    "https://allfamous.org/people/lucas-castel-19960508.html",
    "https://allfamous.org/people/mari-kruchkova-27sg.html",
    "https://allfamous.org/people/maverick-mcconnell-19950508.html",
    "https://allfamous.org/people/ally-salort-youtube-star.html",
    "https://allfamous.org/people/jordyn-huitema-20010508.html",
    "https://allfamous.org/people/scrubkillarl-20030508.html",
    "https://allfamous.org/people/sam-dekker-19940508.html",
    "https://allfamous.org/people/isabella-mugglesam-20050508.html",
    "https://allfamous.org/people/luke-christopher-19930508.html",
    "https://allfamous.org/people/luis-enrique-19700508.html",
    "https://allfamous.org/people/markus-walt-20030508.html",
    "https://allfamous.org/people/moulay-hassan-20030508.html",
    "https://allfamous.org/people/thomas-van-der-vlugt-19920508.html",
    "https://allfamous.org/people/soju-19910508.html",
    "https://allfamous.org/people/julian-delgrosso-19950508.html",
    "https://allfamous.org/people/my-nguyen-19800508.html",
    "https://allfamous.org/people/io-shirai-8bhh.html",
    "https://allfamous.org/people/sean-oconnor-19850508.html",
    "https://allfamous.org/people/kaan-urgancioglu-19810508.html",
    "https://allfamous.org/people/alex-van-halen-19530508.html",
    "https://allfamous.org/people/olga-lucia-vives-19980508.html",
    "https://allfamous.org/people/kim-seon-ho-19860508.html",
    "https://allfamous.org/people/jeremy-shafer-19730508.html",
    
    "https://allfamous.org/people/vicky-mcclure-19830508.html",
    "https://allfamous.org/people/martin-compston-19840508.html",
    "https://allfamous.org/people/yazmin-nicole-19910508.html",
    "https://allfamous.org/people/atakan-hosgoren-19990508.html",
    "https://allfamous.org/people/victoria-matosa-19970508.html",
    "https://allfamous.org/people/andrei-deiu-19960508.html",
    "https://allfamous.org/people/niki-topgaard-19850508.html",
    "https://allfamous.org/people/matt-martin-19890508.html",
    "https://allfamous.org/people/ronnie-lott-19590508.html",
    "https://allfamous.org/people/peter-chao-19870508.html",
    "https://allfamous.org/people/chance-moore-19910508.html",
    "https://allfamous.org/people/josie-maran-19780508.html",
    "https://allfamous.org/people/joe-bonamassa-19770508.html",
    "https://allfamous.org/people/kenya-olivera-19900508.html",
    "https://allfamous.org/people/kendra-james-19870508.html",
    "https://allfamous.org/people/dudeitsriley-20000508.html",
    "https://allfamous.org/people/brad-culpepper-19690508.html",
    "https://allfamous.org/people/fightmetyler-20000508.html",
    "https://allfamous.org/people/masieh-19970508.html",
    "https://allfamous.org/people/sapan-verma-19890508.html",
    "https://allfamous.org/people/fijimacintosh-19990508.html",
    "https://allfamous.org/people/andy-brown-19870508.html",
    "https://allfamous.org/people/justin-jarzombek-20010508.html",
    "https://allfamous.org/people/sincerelyana-20000508.html",
    "https://allfamous.org/people/tubby-emu-19910508.html",
    "https://allfamous.org/people/india-ferrah-19860508.html",
    "https://allfamous.org/people/aiden-arthur-20050508.html",
    "https://allfamous.org/people/kevin-hayes-19920508.html",
    "https://allfamous.org/people/evan-hofer-19970508.html",
    "https://allfamous.org/people/cilio-19920508.html",
    "https://allfamous.org/people/josh-shepherd-20000508.html",
    "https://allfamous.org/people/sydni-barlow-20040508.html",
    "https://allfamous.org/people/marta-sanchez-19660508.html",
    "https://allfamous.org/people/darren-hayes-19720508.html",
    "https://allfamous.org/people/glen-henry-gwi2.html",
    "https://allfamous.org/people/realrallyreyes-kecc.html",
    "https://allfamous.org/people/justin-tse-19970508.html",
    "https://allfamous.org/people/polly-marchant-19940508.html",
    "https://allfamous.org/people/brandon-robert-brown-19850508.html",
    "https://allfamous.org/people/cleo-buckman-schwimmer-20110508.html",
    "https://allfamous.org/people/lenisa-di-clemente-20020508.html",
    "https://allfamous.org/people/haley-jasso-20030508.html",
    "https://allfamous.org/people/giuseppe-zeno-19760508.html",
    "https://allfamous.org/people/lexi-lawson-19840508.html",
    "https://allfamous.org/people/galen-rupp-19860508.html",
    "https://allfamous.org/people/sveta-sanders-19820508.html",
    "https://allfamous.org/people/hazal-subasi-19960508.html",
    "https://allfamous.org/people/megan-miller-19900508.html",
    
    "https://allfamous.org/people/jasen-fisher-19800508.html",
    "https://allfamous.org/people/amanda-cook-19840508.html",
    "https://allfamous.org/people/brooke-alexandra-19960508.html",
    "https://allfamous.org/people/nora-arnezeder-19890508.html",
    "https://allfamous.org/people/micah-christenson-19930508.html",
    "https://allfamous.org/people/buakaw-banchamek-19820508.html",
    "https://allfamous.org/people/sunaika-bruna-souza-19950508.html",
    "https://allfamous.org/people/sean-cullen-19950508.html",
    "https://allfamous.org/people/megan-evans-19870508.html",
    "https://allfamous.org/people/philip-bailey-19510508.html",
    "https://allfamous.org/people/david-bunn-20020508.html",
    "https://allfamous.org/people/joe-baggs-19970508.html",
    "https://allfamous.org/people/toby-grey-19940508.html",
    "https://allfamous.org/people/brian-tyler-19720508.html",
    "https://allfamous.org/people/iran-barkley-19600508.html",
    "https://allfamous.org/people/lylli-stapper-fvxv.html",
    "https://allfamous.org/people/jonathon-young-19730508.html",
    "https://allfamous.org/people/brad-bastidas-20020508.html",
    "https://allfamous.org/people/potap-19810508.html",
    "https://allfamous.org/people/jalen-charlize-20050508.html",
    "https://allfamous.org/people/kirill-nezboretsky-19970508.html",
    "https://allfamous.org/people/laura-spencer-19860508.html",
    "https://allfamous.org/people/internetfunny-19960508.html",
    "https://allfamous.org/people/hidekaz-himaruya-19850508.html",
    "https://allfamous.org/people/george-jancy-4lte.html",
    "https://allfamous.org/people/ambrosia-malbrough-19900508.html",
    "https://allfamous.org/people/celianvlt-20010508.html",
    "https://allfamous.org/people/mehrked-20000508.html",
    "https://allfamous.org/people/dj-durel-19830508.html",
    "https://allfamous.org/people/sam-kim-19770508.html",
    "https://allfamous.org/people/doga-konakoglu-19880508.html",
    "https://allfamous.org/people/gemma-oaten-19840508.html",
    "https://allfamous.org/people/christine-brecht-19910508.html",
    "https://allfamous.org/people/james-elmer-19860508.html",
    "https://allfamous.org/people/mike-linnyker-19970508.html",
    "https://allfamous.org/people/dylan-hartigan-19960508.html",
    "https://allfamous.org/people/nikola-roumeliotis-20000508.html",
    "https://allfamous.org/people/franco-baresi-19600508.html",
    "https://allfamous.org/people/jamie-donnelly-19470508.html",
    "https://allfamous.org/people/kevin-mccloud-19590508.html",
    "https://allfamous.org/people/lauren-nally-19970508.html",
    "https://allfamous.org/people/mehmet-gunsur-19750508.html",
    "https://allfamous.org/people/emily-lucas-20000508.html",
    "https://allfamous.org/people/renni-rere-19970508.html",
    "https://allfamous.org/people/cynthia-rodriguez-19840508.html",
    "https://allfamous.org/people/blake-coward-19960508.html",
    "https://allfamous.org/people/jodhi-may-19750508.html",
    "https://allfamous.org/people/jordan-oliver-19900508.html",
    
    "https://allfamous.org/people/soypan-20000508.html",
    "https://allfamous.org/people/tony-spera-19530508.html",
    "https://allfamous.org/people/prince-donnell-iv-19960508.html",
    "https://allfamous.org/people/janey-b-19860508.html",
    "https://allfamous.org/people/dave-rowntree-19640508.html",
    "https://allfamous.org/people/liam-mackay-19870508.html",
    "https://allfamous.org/people/allaray-roo-19930508.html",
    "https://allfamous.org/people/bill-cowher-19570508.html",
    "https://allfamous.org/people/matt-burns-19840508.html",
    "https://allfamous.org/people/ryan-cook-19830508.html",
    "https://allfamous.org/people/andrea-barzagli-19810508.html",
    "https://allfamous.org/people/amy-rider-19850508.html",
    "https://allfamous.org/people/mike-dantoni-19510508.html",
    "https://allfamous.org/people/anurag-basu-19740508.html",
    "https://allfamous.org/people/lane-johnson-19900508.html",
    "https://allfamous.org/people/micah-sloat-19810508.html",
    "https://allfamous.org/people/garrett-temple-19860508.html",
    "https://allfamous.org/people/colliepops-19990508.html",
    "https://allfamous.org/people/david-keith-19540508.html",
    "https://allfamous.org/people/otis-maguire-20090508.html",
    "https://allfamous.org/people/bradley-bastidas-rtwu.html",
    "https://allfamous.org/people/lovie-smith-19580508.html",
    "https://allfamous.org/people/anushae-khan-19940508.html",
    "https://allfamous.org/people/rebeca-andrade-19990508.html",
    "https://allfamous.org/people/jennifer-walcott-19770508.html",
    "https://allfamous.org/people/lars-eller-19890508.html",
    "https://allfamous.org/people/bobby-labonte-19640508.html",
    "https://allfamous.org/people/india-menuez-19930508.html",
    "https://allfamous.org/people/jeff-wincott-19570508.html",
    "https://allfamous.org/people/rosie-caddick-19960508.html",
    "https://allfamous.org/people/simon-kunz-19540508.html",
    "https://allfamous.org/people/aaron-gassor-19890508.html",
    "https://allfamous.org/people/christina-cole-19820508.html",
    "https://allfamous.org/people/roddy-doyle-19580508.html",
    "https://allfamous.org/people/toni-tennille-19400508.html",
    "https://allfamous.org/people/ale-cutri-19990508.html",
    "https://allfamous.org/people/mila-stuberi-20000508.html",
    "https://allfamous.org/people/elijah-marcano-19970508.html",
    "https://allfamous.org/people/noo-stenning-19990508.html",
    "https://allfamous.org/people/rachel-marie-harris-19960508.html",
    "https://allfamous.org/people/karma-samdrup-19680508.html",
    "https://allfamous.org/people/araceli-rosa-19970508.html",
    "https://allfamous.org/people/hiromu-arakawa-19730508.html",
    "https://allfamous.org/people/prakriti-kakar-19950508.html",
    "https://allfamous.org/people/douglas-alvarez-19970508.html",
    "https://allfamous.org/people/geoffreymojica-20040508.html",
    "https://allfamous.org/people/chuck-huber-19710508.html",
    "https://allfamous.org/people/alana-atkins-19860508.html",
    
    "https://allfamous.org/people/collins-key-19960509.html",
    "https://allfamous.org/people/noah-centineo-19960509.html",
    "https://allfamous.org/people/cree-cicchino-20020509.html",
    "https://allfamous.org/people/mary-mouser-19960509.html",
    "https://allfamous.org/people/billy-joel-19490509.html",
    "https://allfamous.org/people/avaryana-rose-20050509.html",
    "https://allfamous.org/people/jackson-green-20030509.html",
    "https://allfamous.org/people/psalm-west-20190509.html",
    "https://allfamous.org/people/jelina-19980509.html",
    "https://allfamous.org/people/alexandra-chaves-20010509.html",
    "https://allfamous.org/people/noah-sweeney-wukk.html",
    "https://allfamous.org/people/desi-banks-19930509.html",
    "https://allfamous.org/people/bandokay-20010509.html",
    "https://allfamous.org/people/neatmike-19930509.html",
    "https://allfamous.org/people/melanie-deangelis-20030509.html",
    "https://allfamous.org/people/ben-hampton-20110509.html",
    "https://allfamous.org/people/cutiethiccckums-tiktok-star.html",
    "https://allfamous.org/people/birdie-joe-danielson-20170509.html",
    "https://allfamous.org/people/leo-mahalo-19970509.html",
    "https://allfamous.org/people/wolfgang-novogratz-19970509.html",
    "https://allfamous.org/people/jack-fincham-19910509.html",
    "https://allfamous.org/people/willyrex-19930509.html",
    "https://allfamous.org/people/tamia-hill-19750509.html",
    "https://allfamous.org/people/rosario-dawson-19790509.html",
    "https://allfamous.org/people/travis-turner-19870509.html",
    "https://allfamous.org/people/snake-discovery-19910509.html",
    "https://allfamous.org/people/mariano-di-vaio-19890509.html",
    "https://allfamous.org/people/sasha-farber-19840509.html",
    "https://allfamous.org/people/musicallymaxim-20010509.html",
    "https://allfamous.org/people/bogdan-lalovic-19900509.html",
    "https://allfamous.org/people/ghostface-killah-19700509.html",
    "https://allfamous.org/people/manuel-mendes-19670509.html",
    "https://allfamous.org/people/jayce-cicchino-20020509.html",
    "https://allfamous.org/people/danny-duncan-19860509.html",
    "https://allfamous.org/people/audrina-patridge-19850509.html",
    "https://allfamous.org/people/talli-tattii-20000509.html",
    "https://allfamous.org/people/kyle-myers-19860509.html",
    "https://allfamous.org/people/matt-donovan-19900509.html",
    "https://allfamous.org/people/pierre-bouvier-19790509.html",
    "https://allfamous.org/people/moritz-schirdewahn-20020509.html",
    "https://allfamous.org/people/dave-gahan-19620509.html",
    "https://allfamous.org/people/imogen-cribb-20020509.html",
    "https://allfamous.org/people/vijay-deverakonda-19890509.html",
    "https://allfamous.org/people/kelsey-animated-20010509.html",
    "https://allfamous.org/people/amy-hill-19530509.html",
    "https://allfamous.org/people/jinger-olinselot-19830509.html",
    "https://allfamous.org/people/braison-cyrus-19940509.html",
    "https://allfamous.org/people/amber-fillerup-19900509.html",
    
    "https://allfamous.org/people/brian-deegan-19750509.html",
    "https://allfamous.org/people/marie-edwards-19920509.html",
    "https://allfamous.org/people/brennan-tracy-19950509.html",
    "https://allfamous.org/people/chris-zylka-19850509.html",
    "https://allfamous.org/people/alison-gold-20020509.html",
    "https://allfamous.org/people/bryce-mcgintus-20070509.html",
    "https://allfamous.org/people/molly-baz-19880509.html",
    "https://allfamous.org/people/jude-baker-20060509.html",
    "https://allfamous.org/people/ava-woehrle-20050509.html",
    "https://allfamous.org/people/jang-hee-jin-19830509.html",
    "https://allfamous.org/people/caroline-zalog-19970509.html",
    "https://allfamous.org/people/chvse-19990509.html",
    "https://allfamous.org/people/young-t-19970509.html",
    "https://allfamous.org/people/steven-perkins-19860509.html",
    "https://allfamous.org/people/lizzy-howell-20010509.html",
    "https://allfamous.org/people/leeleedraws-20020509.html",
    "https://allfamous.org/people/c418-19890509.html",
    "https://allfamous.org/people/meso-sacred-19960509.html",
    "https://allfamous.org/people/sho-madjozi-19920509.html",
    "https://allfamous.org/people/penny-parnevik-19970509.html",
    "https://allfamous.org/people/abbie-quinnen-19970509.html",
    "https://allfamous.org/people/hannah-starr-19960509.html",
    "https://allfamous.org/people/prince-fielder-19840509.html",
    "https://allfamous.org/people/lexie-gerrard-20060509.html",
    "https://allfamous.org/people/gina-lorena-19980509.html",
    "https://allfamous.org/people/amanda-strand-19990509.html",
    "https://allfamous.org/people/austin-gray-19950509.html",
    "https://allfamous.org/people/ladarius-marshall-19980509.html",
    "https://allfamous.org/people/doug-christie-19700509.html",
    "https://allfamous.org/people/manpreet-toor-19900509.html",
    "https://allfamous.org/people/mango-marlin-20030509.html",
    "https://allfamous.org/people/luca-murphy-19870509.html",
    "https://allfamous.org/people/john-corbett-19610509.html",
    "https://allfamous.org/people/caroline-costa-19960509.html",
    "https://allfamous.org/people/sai-pallavi-19920509.html",
    "https://allfamous.org/people/alex-martin-19730509.html",
    "https://allfamous.org/people/youssef-bahri-19920509.html",
    "https://allfamous.org/people/hailie-barber-19960509.html",
    "https://allfamous.org/people/leila-buora-20000509.html",
    "https://allfamous.org/people/daniel-franzese-19780509.html",
    "https://allfamous.org/people/adam-spott-19890509.html",
    "https://allfamous.org/people/angie-bolainez-20050509.html",
    "https://allfamous.org/people/amarie-burgos-19920509.html",
    "https://allfamous.org/people/candice-bergen-19460509.html",
    "https://allfamous.org/people/clayton-thomas-19860509.html",
    "https://allfamous.org/people/opsmiles1x-lujd.html",
    "https://allfamous.org/people/landon-kalin-20020509.html",
    "https://allfamous.org/people/dana-perino-19720509.html",
    
    "https://allfamous.org/people/amir-hadzic-19940509.html",
    "https://allfamous.org/people/christine-ha-19790509.html",
    "https://allfamous.org/people/dmasterflex-19910509.html",
    "https://allfamous.org/people/yogi-ferrell-19930509.html",
    "https://allfamous.org/people/jang-hansol-19940509.html",
    "https://allfamous.org/people/yamada-ryosuke-19930509.html",
    "https://allfamous.org/people/tim-sharp-19880509.html",
    "https://allfamous.org/people/regan-gray-20030509.html",
    "https://allfamous.org/people/paige-brendel-19910509.html",
    "https://allfamous.org/people/brad-mattinson-19990509.html",
    "https://allfamous.org/people/florcheto-20000509.html",
    "https://allfamous.org/people/jenna-owens-19840509.html",
    "https://allfamous.org/people/neil-wilson-19680509.html",
    "https://allfamous.org/people/maxine-medina-19900509.html",
    "https://allfamous.org/people/steve-yzerman-19650509.html",
    "https://allfamous.org/people/savannah-burns-20070509.html",
    "https://allfamous.org/people/matt-morris-19790509.html",
    "https://allfamous.org/people/troy-ogletree-19940509.html",
    "https://allfamous.org/people/gary-daniels-19630509.html",
    "https://allfamous.org/people/olive-macauley-20150509.html",
    "https://allfamous.org/people/robby-anderson-19930509.html",
    "https://allfamous.org/people/gillian-kearney-19720509.html",
    "https://allfamous.org/people/will-thomas-19930509.html",
    "https://allfamous.org/people/penn-knapp-20100509.html",
    "https://allfamous.org/people/lewis-belt-19940509.html",
    "https://allfamous.org/people/rachel-boston-19820509.html",
    "https://allfamous.org/people/mollie-talbot-19950509.html",
    "https://allfamous.org/people/kieran-gray-20040509.html",
    "https://allfamous.org/people/pat-contri-19800509.html",
    "https://allfamous.org/people/kevin-valle-19830509.html",
    "https://allfamous.org/people/james-l-brooks-19400509.html",
    "https://allfamous.org/people/rk-bagatsing-19880509.html",
    "https://allfamous.org/people/ben-selley-19940509.html",
    "https://allfamous.org/people/ftgusna-20030509.html",
    "https://allfamous.org/people/kevin-paquette-20020509.html",
    "https://allfamous.org/people/helene-philippou-19910509.html",
    "https://allfamous.org/people/yarishna-ayala-19920509.html",
    "https://allfamous.org/people/madelynne-whitt-20010509.html",
    "https://allfamous.org/people/brett-zimmerman-19850509.html",
    "https://allfamous.org/people/gregor-milne-20010509.html",
    "https://allfamous.org/people/chris-diamantopoulos-19750509.html",
    "https://allfamous.org/people/scott-lepage-19930509.html",
    "https://allfamous.org/people/valentin-neoxi-19970509.html",
    "https://allfamous.org/people/giulia-penna-19920509.html",
    "https://allfamous.org/people/kenneth-earl-medrano-19910509.html",
    "https://allfamous.org/people/lionel-boyce-19910509.html",
    "https://allfamous.org/people/artur-sikorski-20010509.html",
    "https://allfamous.org/people/maya-hennessy-20020509.html",
    
    "https://allfamous.org/people/grace-gummer-19860509.html",
    "https://allfamous.org/people/jamie-cotter-20020509.html",
    "https://allfamous.org/people/martin-lewis-19720509.html",
    "https://allfamous.org/people/lj-larot-19980509.html",
    "https://allfamous.org/people/kim-ji-hoon-19810509.html",
    "https://allfamous.org/people/danny-martinez-20010509.html",
    "https://allfamous.org/people/glenda-jackson-19360509.html",
    "https://allfamous.org/people/capri-rose-mallozzi-20190509.html",
    "https://allfamous.org/people/bebe-19780509.html",
    "https://allfamous.org/people/tyrhee-spivey-19870509.html",
    "https://allfamous.org/people/kesami-hitaffer-20020509.html",
    "https://allfamous.org/people/ourfa-zinali-19880509.html",
    "https://allfamous.org/people/savana-petruzello-19970509.html",
    "https://allfamous.org/people/edd-china-19710509.html",
    "https://allfamous.org/people/emre-bey-19970509.html",
    "https://allfamous.org/people/andrew-wk-19790509.html",
    "https://allfamous.org/people/jawaad-saeed-19980509.html",
    "https://allfamous.org/people/katherine-haik-20000509.html",
    "https://allfamous.org/people/desmond-mueller-20000509.html",
    "https://allfamous.org/people/nikola-szafeczka-20080509.html",
    "https://allfamous.org/people/niharicka-singh-19910509.html",
    "https://allfamous.org/people/leah-bateman-19950509.html",
    "https://allfamous.org/people/jace-coronilla-20040509.html",
    "https://allfamous.org/people/simi-chahal-19920509.html",
    "https://allfamous.org/people/trey-lance-20000509.html",
    "https://allfamous.org/people/julia-taylor-ross-19830509.html",
    "https://allfamous.org/people/david-caro-levy-19970509.html",
    "https://allfamous.org/people/mark-parson-19860509.html",
    "https://allfamous.org/people/lacy-faddoul-19880509.html",
    "https://allfamous.org/people/highman-19990509.html",
    "https://allfamous.org/people/jamie-fort-19990509.html",
    "https://allfamous.org/people/chase-payton-19970509.html",
    "https://allfamous.org/people/dylan-lauren-19740509.html",
    "https://allfamous.org/people/nick-transon-20010509.html",
    "https://allfamous.org/people/monica-gomez-19800509.html",
    "https://allfamous.org/people/tommy-edman-smkv.html",
    "https://allfamous.org/people/sum-ting-wong-19890509.html",
    "https://allfamous.org/people/crazyjamjam-dxmq.html",
    "https://allfamous.org/people/karolina-jez-19860509.html",
    "https://allfamous.org/people/brandon-iverson-19980509.html",
    "https://allfamous.org/people/giveaway-fun-19870509.html",
    "https://allfamous.org/people/sun-ho-park-19930509.html",
    "https://allfamous.org/people/lindsay-whalen-19820509.html",
    "https://allfamous.org/people/alice-cassell-19910509.html",
    "https://allfamous.org/people/rich-the-factor-19720509.html",
    "https://allfamous.org/people/ale-mendoza-19910509.html",
    "https://allfamous.org/people/kassidy-cook-19950509.html",
    "https://allfamous.org/people/sonja-sohn-19640509.html",
    
    "https://allfamous.org/people/elijah-santoro-20010509.html",
    "https://allfamous.org/people/wendy-crewson-19560509.html",
    "https://allfamous.org/people/chase-headley-19840509.html",
    "https://allfamous.org/people/ragan-fox-19760509.html",
    "https://allfamous.org/people/jake-long-19850509.html",
    "https://allfamous.org/people/larry-bundy-jr-19790509.html",
    "https://allfamous.org/people/rachel-of-rachelandjune-19880509.html",
    "https://allfamous.org/people/ean-nasrun-19790509.html",
    "https://allfamous.org/people/kellie-eastwood-19970509.html",
    "https://allfamous.org/people/nasser-sultan-19670509.html",
    "https://allfamous.org/people/calvin-murphy-19480509.html",
    "https://allfamous.org/people/jessica-alves-19960509.html",
    "https://allfamous.org/people/alley-mills-19510509.html",
    "https://allfamous.org/people/hiper-19900509.html",
    "https://allfamous.org/people/faiq-bolkiah-19980509.html",
    "https://allfamous.org/people/serena-petruzello-19970509.html",
    "https://allfamous.org/people/ion-tiriac-19390509.html",
    "https://allfamous.org/people/ann-hoang-19910509.html",
    "https://allfamous.org/people/cathrine-doreen-19840509.html",
    "https://allfamous.org/people/lamadelynn-19920509.html",
    "https://allfamous.org/people/milo-moire-19830509.html",
    "https://allfamous.org/people/lisa-henson-19600509.html",
    "https://allfamous.org/people/berk-cankat-19840509.html",
    "https://allfamous.org/people/angel-campa-20020509.html",
    "https://allfamous.org/people/bkr-vlogs-19950509.html",
    "https://allfamous.org/people/shane-gray-19720509.html",
    "https://allfamous.org/people/dennon-lewis-19970509.html",
    "https://allfamous.org/people/lane-kiffin-19750509.html",
    "https://allfamous.org/people/renata-ruiz-19840509.html",
    "https://allfamous.org/people/ashley-kristin-garner-19850509.html",
    "https://allfamous.org/people/kevin-gameiro-19870509.html",
    "https://allfamous.org/people/dan-cole-19870509.html",
    "https://allfamous.org/people/majlinda-kelmendi-19910509.html",
    "https://allfamous.org/people/ray-romulus-19820509.html",
    "https://allfamous.org/people/becca-droz-19900509.html",
    "https://allfamous.org/people/shide-boss-19920509.html",
    "https://allfamous.org/people/kelsey-alfred-19950509.html",
    "https://allfamous.org/people/jupp-heynckes-19450509.html",
    "https://allfamous.org/people/bill-murphy-19810509.html",
    "https://allfamous.org/people/minerva-casero-19990509.html",
    "https://allfamous.org/people/maiju-voutilainen-19960509.html",
    "https://allfamous.org/people/cory-grant-19880509.html",
    "https://allfamous.org/people/hudson-leick-19690509.html",
    "https://allfamous.org/people/genise-shelton-19790509.html",
    "https://allfamous.org/people/zane-huett-19970509.html",
    "https://allfamous.org/people/clement-maosa-19880509.html",
    "https://allfamous.org/people/paul-heaton-19620509.html",
    "https://allfamous.org/people/marisol-del-olmo-19750509.html",
    
    "https://allfamous.org/people/dylan-leonte-iwpn.html",
    "https://allfamous.org/people/emilio-martinez-19990510.html",
    "https://allfamous.org/people/ivan-martinez-19990510.html",
    "https://allfamous.org/people/callmecarson-19990510.html",
    "https://allfamous.org/people/brittany-broski-19970510.html",
    "https://allfamous.org/people/aidan-prince-20060510.html",
    "https://allfamous.org/people/sypher-ali-19960510.html",
    "https://allfamous.org/people/kayla-jones-19970510.html",
    "https://allfamous.org/people/jeleniewska-20020510.html",
    "https://allfamous.org/people/stevenrockich-zqb3.html",
    "https://allfamous.org/people/kenan-thompson-19780510.html",
    "https://allfamous.org/people/marlon-webb-19910510.html",
    "https://allfamous.org/people/bono-19600510.html",
    "https://allfamous.org/people/aya-nakamura-19950510.html",
    "https://allfamous.org/people/taehyun-19940510.html",
    "https://allfamous.org/people/halston-sage-19930510.html",
    "https://allfamous.org/people/cg5-19990510.html",
    "https://allfamous.org/people/pressa-19960510.html",
    "https://allfamous.org/people/carley-tabler-19960510.html",
    "https://allfamous.org/people/yoshidoll-20110510.html",
    "https://allfamous.org/people/karissa-hudson-20000510.html",
    "https://allfamous.org/people/lindsey-shaw-19890510.html",
    "https://allfamous.org/people/jake-zyrus-19920510.html",
    "https://allfamous.org/people/adebayo-akinfenwa-19820510.html",
    "https://allfamous.org/people/willow-morgan-20120510.html",
    "https://allfamous.org/people/missy-franklin-19950510.html",
    "https://allfamous.org/people/lena-tamburini-20050510.html",
    "https://allfamous.org/people/mat-franco-19880510.html",
    "https://allfamous.org/people/thatswet-19980510.html",
    "https://allfamous.org/people/exi-19980510.html",
    "https://allfamous.org/people/fouz-alfahad-19900510.html",
    "https://allfamous.org/people/gia-gunn-19900510.html",
    "https://allfamous.org/people/annika-sofie-20020510.html",
    "https://allfamous.org/people/taya-smith-19890510.html",
    "https://allfamous.org/people/mc-ride-19780510.html",
    "https://allfamous.org/people/ellen-ochoa-19580510.html",
    "https://allfamous.org/people/odette-annable-19850510.html",
    "https://allfamous.org/people/leah-gosselin-20040510.html",
    "https://allfamous.org/people/lauren-potter-19900510.html",
    "https://allfamous.org/people/zoranna-jovanovic-19900510.html",
    "https://allfamous.org/people/anna-paull-wvc3.html",
    "https://allfamous.org/people/angel-gibbs-19990510.html",
    "https://allfamous.org/people/lane-webber-20000510.html",
    "https://allfamous.org/people/sam-anderson-19880510.html",
    "https://allfamous.org/people/tony-ozkan-20010510.html",
    "https://allfamous.org/people/joey-zehr-19820510.html",
    "https://allfamous.org/people/kaeli-mcewen-raxb.html",
    "https://allfamous.org/people/bae-jinyoung-20000510.html",
    
    "https://allfamous.org/people/lexie-herod-20010510.html",
    "https://allfamous.org/people/salvador-perez-19900510.html",
    "https://allfamous.org/people/adam-lallana-19880510.html",
    "https://allfamous.org/people/brandon-williams-19960510.html",
    "https://allfamous.org/people/davonne-rogers-19880510.html",
    "https://allfamous.org/people/mayrushart-20090510.html",
    "https://allfamous.org/people/chanelle-randle-19980510.html",
    "https://allfamous.org/people/paige-ohara-19560510.html",
    "https://allfamous.org/people/erika-fong-19870510.html",
    "https://allfamous.org/people/hannah-gosselin-20040510.html",
    "https://allfamous.org/people/alexis-gosselin-20040510.html",
    "https://allfamous.org/people/cazzie-david-19940510.html",
    "https://allfamous.org/people/kilo-kish-19900510.html",
    "https://allfamous.org/people/desmond-johnson-19940510.html",
    "https://allfamous.org/people/zach-roloff-19900510.html",
    "https://allfamous.org/people/tyus-jones-19960510.html",
    "https://allfamous.org/people/kenny-beats-19910510.html",
    "https://allfamous.org/people/jadaa-blue-20000510.html",
    "https://allfamous.org/people/nicks-vieira-19990510.html",
    "https://allfamous.org/people/holly-thomas-19740510.html",
    "https://allfamous.org/people/dennis-bergkamp-19690510.html",
    "https://allfamous.org/people/summer-bunni-19980510.html",
    "https://allfamous.org/people/collin-gosselin-20040510.html",
    "https://allfamous.org/people/ray-dalton-19910510.html",
    "https://allfamous.org/people/olivia-mai-barrett-19960510.html",
    "https://allfamous.org/people/sharron-townsend-19930510.html",
    "https://allfamous.org/people/orb1tron-20040510.html",
    "https://allfamous.org/people/prince-vegeta-19940510.html",
    "https://allfamous.org/people/dallas-roberts-19700510.html",
    "https://allfamous.org/people/blake-mason-19940510.html",
    "https://allfamous.org/people/christopher-paul-curtis-19530510.html",
    "https://allfamous.org/people/fredsvoice-19900510.html",
    "https://allfamous.org/people/bibi-20020510.html",
    "https://allfamous.org/people/asli-enver-19840510.html",
    "https://allfamous.org/people/sam-callahan-19940510.html",
    "https://allfamous.org/people/liana-loyal-family-19900510.html",
    "https://allfamous.org/people/kimari-coleman-20010510.html",
    "https://allfamous.org/people/richarlison-19970510.html",
    "https://allfamous.org/people/lee-hyori-19790510.html",
    "https://allfamous.org/people/coni-tv-19890510.html",
    "https://allfamous.org/people/sally-phillips-19700510.html",
    "https://allfamous.org/people/linda-evangelista-19650510.html",
    "https://allfamous.org/people/aaden-gosselin-20040510.html",
    "https://allfamous.org/people/connor-joyce-20070510.html",
    "https://allfamous.org/people/jade-marie-sanders-20020510.html",
    "https://allfamous.org/people/carissa-nunez-19930510.html",
    "https://allfamous.org/people/william-regal-19680510.html",
    "https://allfamous.org/people/maisey-rika-19830510.html",
]

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
