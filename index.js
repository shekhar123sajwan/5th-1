 
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
  "https://allfamous.org/people/retro-marcky-20020626.html",
    "https://allfamous.org/people/chloe-weinstein-tiktok-star.html",
    "https://allfamous.org/people/chris-odonnell-19700626.html",
    "https://allfamous.org/people/greg-saniatan-19870626.html",
    "https://allfamous.org/people/jordan-fish-19860626.html",
    "https://allfamous.org/people/shadypenguinn-19910626.html",
    "https://allfamous.org/people/keife-20010626.html",
    "https://allfamous.org/people/arjun-kapoor-19850626.html",
    
    "https://allfamous.org/people/ben-tang-19940626.html",
    "https://allfamous.org/people/monique-rosalia-20010626.html",
    "https://allfamous.org/people/matt-smith-19960626.html",
    "https://allfamous.org/people/dr-ranjit-singh-19790626.html",
    "https://allfamous.org/people/ashton-ray-tiktok-star.html",
    "https://allfamous.org/people/andre-gray-19910626.html",
    "https://allfamous.org/people/karolina-zebrowska-8hjq.html",
    "https://allfamous.org/people/sean-hayes-19700626.html",
    "https://allfamous.org/people/angelina-pivarnick-19860626.html",
    "https://allfamous.org/people/nick-compton-19830626.html",
    "https://allfamous.org/people/jessica-batten-19840626.html",
    "https://allfamous.org/people/carlos-liera-19870626.html",
    "https://allfamous.org/people/fat-trel-19900626.html",
    "https://allfamous.org/people/benji-garner-20030626.html",
    "https://allfamous.org/people/richard-burgess-19910626.html",
    "https://allfamous.org/people/shannon-sharpe-19680626.html",
    "https://allfamous.org/people/kamillion-19890626.html",
    "https://allfamous.org/people/yesha-camile-20090626.html",
    "https://allfamous.org/people/gretchen-wilson-19730626.html",
    "https://allfamous.org/people/1takejay-19980626.html",
    "https://allfamous.org/people/beasttrollmc-20000626.html",
    "https://allfamous.org/people/ishmael-august-norelus-gw1g.html",
    "https://allfamous.org/people/deron-williams-19840626.html",
    "https://allfamous.org/people/paolo-maldini-19680626.html",
    "https://allfamous.org/people/keeno-20010626.html",
    "https://allfamous.org/people/myla-dalbesio-19870626.html",
    "https://allfamous.org/people/amalia-yoo-20020626.html",
    "https://allfamous.org/people/lisa-eldridge-19660626.html",
    "https://allfamous.org/people/bianca-finch-20000626.html",
    "https://allfamous.org/people/fahad-mustafa-19830626.html",
    "https://allfamous.org/people/zaddy-19920626.html",
    "https://allfamous.org/people/gregory-kasyan-20010626.html",
    "https://allfamous.org/people/ollie-mckendrick-ness-19940626.html",
    "https://allfamous.org/people/david-radosavljevic-20040626.html",
    "https://allfamous.org/people/haley-kobak-6veb.html",
    "https://allfamous.org/people/cheyna-tiktok-star.html",
    "https://allfamous.org/people/chris-isaak-19560626.html",
    "https://allfamous.org/people/fjord-frost-19960626.html",
    "https://allfamous.org/people/lyssaabbby-20010626.html",
    "https://allfamous.org/people/hannaha-hall-exr7.html",
    "https://allfamous.org/people/john-gray-iii-19730626.html",
    "https://allfamous.org/people/nutsa-sikharulidze-19960626.html",
    "https://allfamous.org/people/harper-grace-20010626.html",
    "https://allfamous.org/people/kavya-borra-20020626.html",
    "https://allfamous.org/people/jj-barea-19840626.html",
    "https://allfamous.org/people/princess-alexia-of-the-netherlands-20050626.html",
    "https://allfamous.org/people/sienna-wilson-20100626.html",
    "https://allfamous.org/people/ellen-aabol-20000626.html",
    
    "https://allfamous.org/people/irv-gotti-19700626.html",
    "https://allfamous.org/people/issey-fazlisham-19870626.html",
    "https://allfamous.org/people/amillz-19970626.html",
    "https://allfamous.org/people/joel-hunt-19910626.html",
    "https://allfamous.org/people/samir-nasri-19870626.html",
    "https://allfamous.org/people/hollie-arnold-19940626.html",
    "https://allfamous.org/people/julia-gavrilina-20020626.html",
    "https://allfamous.org/people/cristian-llama-19860626.html",
    "https://allfamous.org/people/kamila-hansen-19920626.html",
    "https://allfamous.org/people/nadia-mohebban-19930626.html",
    "https://allfamous.org/people/lettice-rowbotham-19890626.html",
    "https://allfamous.org/people/john-mark-loudermilk-19910626.html",
    "https://allfamous.org/people/serena-isioma-20000626.html",
    "https://allfamous.org/people/petya-koleva-ivanova-19840626.html",
    "https://allfamous.org/people/matt-letscher-19700626.html",
    "https://allfamous.org/people/ian-fimple-19980626.html",
    "https://allfamous.org/people/wyatt-mcclure-20080626.html",
    "https://allfamous.org/people/katelyn-ashley-19960626.html",
    "https://allfamous.org/people/brendon-whatley-19970626.html",
    "https://allfamous.org/people/jason-schwartzman-19800626.html",
    "https://allfamous.org/people/koine-iwasaki-19970626.html",
    "https://allfamous.org/people/lindsay-bingham-19850626.html",
    "https://allfamous.org/people/jessica-caldwell-19870626.html",
    "https://allfamous.org/people/joanne-tucker-19820626.html",
    "https://allfamous.org/people/gjiko-19910626.html",
    "https://allfamous.org/people/ben-wilson-20100626.html",
    "https://allfamous.org/people/george-windsor-19620626.html",
    "https://allfamous.org/people/tite-kubo-19770626.html",
    "https://allfamous.org/people/dave-rubin-19760626.html",
    "https://allfamous.org/people/jamaica-king-19890626.html",
    "https://allfamous.org/people/mick-jones-19550626.html",
    "https://allfamous.org/people/cade-worthy-tiktok-star.html",
    "https://allfamous.org/people/michael-braxton-19470626.html",
    "https://allfamous.org/people/harry-visinoni-19990626.html",
    "https://allfamous.org/people/lebra-jolie-19940626.html",
    "https://allfamous.org/people/kate-squillace-19860626.html",
    "https://allfamous.org/people/mark-mckinney-19590626.html",
    "https://allfamous.org/people/dan-cohen-19860626.html",
    "https://allfamous.org/people/kameron-conley-20010626.html",
    "https://allfamous.org/people/natsuki-hanae-19910626.html",
    "https://allfamous.org/people/jorgie-kubursi-20020626.html",
    "https://allfamous.org/people/walt-windham-19870626.html",
    "https://allfamous.org/people/curtis-ward-19860626.html",
    "https://allfamous.org/people/gregory-finnegan-19800626.html",
    "https://allfamous.org/people/melanie-amaro-19920626.html",
    "https://allfamous.org/people/amanda-du-pont-19880626.html",
    "https://allfamous.org/people/sid-kaan-19860626.html",
    "https://allfamous.org/people/isiah-hadley-19960626.html",
    
    "https://allfamous.org/people/nisha-guragain-19970626.html",
    "https://allfamous.org/people/raymond-felton-19840626.html",
    "https://allfamous.org/people/antoinette-robertson-19930626.html",
    "https://allfamous.org/people/charlotte-connick-20020626.html",
    "https://allfamous.org/people/alaric-tay-19790626.html",
    "https://allfamous.org/people/kyndall-johnson-19990626.html",
    "https://allfamous.org/people/kirill-antipov-20000626.html",
    "https://allfamous.org/people/boogotti-kasino-19990626.html",
    "https://allfamous.org/people/aadil-khan-19930626.html",
    "https://allfamous.org/people/sara-james-19970626.html",
    "https://allfamous.org/people/jd-skyes-19930626.html",
    "https://allfamous.org/people/gulddreng-19940626.html",
    "https://allfamous.org/people/claira-hermet-19870626.html",
    "https://allfamous.org/people/francis-magee-19590626.html",
    "https://allfamous.org/people/billy-davis-jr-19380626.html",
    "https://allfamous.org/people/matt-striker-19740626.html",
    "https://allfamous.org/people/vanessa-cole-19890626.html",
    "https://allfamous.org/people/florentin-hriscu-19930626.html",
    "https://allfamous.org/people/paul-thomas-anderson-19700626.html",
    "https://allfamous.org/people/garou-19720626.html",
    "https://allfamous.org/people/morgan-mason-19550626.html",
    "https://allfamous.org/people/alaxahh-20020626.html",
    "https://allfamous.org/people/nate-porcalla-20030626.html",
    "https://allfamous.org/people/aijia-grammer-19860626.html",
    "https://allfamous.org/people/nixie-strazza-20020626.html",
    "https://allfamous.org/people/stfumatthew-19990626.html",
    "https://allfamous.org/people/sabine-jemeljanovs-19910626.html",
    "https://allfamous.org/people/andrew-gillum-19790626.html",
    "https://allfamous.org/people/robin-madsen-19930626.html",
    "https://allfamous.org/people/jessica-godin-19940626.html",
    "https://allfamous.org/people/joel-campbell-19920626.html",
    "https://allfamous.org/people/baek-yerin-19970626.html",
    "https://allfamous.org/people/patty-smyth-19570626.html",
    "https://allfamous.org/people/jacobhhc-19940626.html",
    "https://allfamous.org/people/wynnsanity-19950626.html",
    "https://allfamous.org/people/kayla-cullity-20030626.html",
    "https://allfamous.org/people/colin-greenwood-19690626.html",
    "https://allfamous.org/people/sarah-schoenbeck-19940626.html",
    "https://allfamous.org/people/dorman-pantfoeder-19800626.html",
    "https://allfamous.org/people/nicole-saba-19740626.html",
    "https://allfamous.org/people/lillie-mae-19910626.html",
    "https://allfamous.org/people/george-adam-escobedo-19970626.html",
    "https://allfamous.org/people/bader-eidan-19920626.html",
    "https://allfamous.org/people/ozan-guler-19910626.html",
    "https://allfamous.org/people/sebastian-garcia-mouret-19960626.html",
    "https://allfamous.org/people/avril-mathie-19870626.html",
    "https://allfamous.org/people/chad-pennington-19760626.html",
    "https://allfamous.org/people/shawna-craig-19860626.html",
    
    "https://allfamous.org/people/keelan-freeman-20010626.html",
    "https://allfamous.org/people/dany-boon-19660626.html",
    "https://allfamous.org/people/nazir-habibov-19880626.html",
    "https://allfamous.org/people/regan-grimes-19930626.html",
    "https://allfamous.org/people/marvin-matyka-9tn4.html",
    "https://allfamous.org/people/tikvea-tan-19970626.html",
    "https://allfamous.org/people/brittney-karbowski-19860626.html",
    "https://allfamous.org/people/katrinchen-hess-19850626.html",
    "https://allfamous.org/people/prisilalove03-20030626.html",
    "https://allfamous.org/people/eric-nelsen-19910626.html",
    "https://allfamous.org/people/suresh-gopi-19590626.html",
    "https://allfamous.org/people/robert-davi-19530626.html",
    "https://allfamous.org/people/maximilian-berger-19900626.html",
    "https://allfamous.org/people/cece-olisa-19900626.html",
    "https://allfamous.org/people/joseph-taktouk-20030626.html",
    "https://allfamous.org/people/lil-louwop-19920626.html",
    "https://allfamous.org/people/layton-gohn-20000626.html",
    "https://allfamous.org/people/yuungjefeholmes-20030626.html",
    "https://allfamous.org/people/gilberto-gil-19420626.html",
    "https://allfamous.org/people/rebecca-budig-19730626.html",
    "https://allfamous.org/people/mr-hudson-19790626.html",
    "https://allfamous.org/people/mckenna-walker-lt6d.html",
    "https://allfamous.org/people/rohan-dunstan-19890626.html",
    "https://allfamous.org/people/chali-2na-19710626.html",
    "https://allfamous.org/people/joao-knorr-19990626.html",
    "https://allfamous.org/people/jeff-frankenstein-19740626.html",
    "https://allfamous.org/people/kasen-anthony-byrd-20160626.html",
    "https://allfamous.org/people/ming-sherap-20000626.html",
    "https://allfamous.org/people/aaron-jackson-19730626.html",
    "https://allfamous.org/people/steven-brand-19690626.html",
    "https://allfamous.org/people/dania-gio-19870626.html",
    "https://allfamous.org/people/ana-victoria-zimmermann-20020626.html",
    "https://allfamous.org/people/lexz-pryde-19910626.html",
    "https://allfamous.org/people/pepe-munoz-19840626.html",
    "https://allfamous.org/people/kassius-bass-19940626.html",
    "https://allfamous.org/people/young-tote-19940626.html",
    "https://allfamous.org/people/abigail-savage-19840626.html",
    "https://allfamous.org/people/aruna-roy-19460626.html",
    "https://allfamous.org/people/brandon-estrada-tiktok-star.html",
    "https://allfamous.org/people/dakota-meyer-19880626.html",
    "https://allfamous.org/people/ashton-taylor-19860626.html",
    "https://allfamous.org/people/jonah-kirsten-sorrentino-19750626.html",
    "https://allfamous.org/people/duda-guedes-20060626.html",
    "https://allfamous.org/people/julia-benson-19790626.html",
    "https://allfamous.org/people/annabel-jones-19880626.html",
    "https://allfamous.org/people/ian-tracey-19640626.html",
    "https://allfamous.org/people/chris-mazdzer-19880626.html",
    "https://allfamous.org/people/joanna-may-parker-19920626.html",
    
    "https://allfamous.org/people/khloe-kardashian-19840627.html",
    "https://allfamous.org/people/madison-haschak-20000627.html",
    "https://allfamous.org/people/andrea-russett-19950627.html",
    "https://allfamous.org/people/her-19970627.html",
    "https://allfamous.org/people/drake-bell-19860627.html",
    "https://allfamous.org/people/lauren-jauregui-19960627.html",
    "https://allfamous.org/people/chandler-riggs-19990627.html",
    "https://allfamous.org/people/ed-westwick-19870627.html",
    "https://allfamous.org/people/mitchell-hope-19940627.html",
    "https://allfamous.org/people/tobey-maguire-19750627.html",
    "https://allfamous.org/people/jo-frost-19700627.html",
    "https://allfamous.org/people/aria-kurzawa-20190627.html",
    "https://allfamous.org/people/sam-claflin-19860627.html",
    "https://allfamous.org/people/matthew-lewis-19890627.html",
    "https://allfamous.org/people/keepupradio-xrtw.html",
    "https://allfamous.org/people/cocone-clayton-youtube-star.html",
    "https://allfamous.org/people/bianca-del-rio-19750627.html",
    "https://allfamous.org/people/tomska-19900627.html",
    "https://allfamous.org/people/shannon-purser-19970627.html",
    "https://allfamous.org/people/isabella-fonte-20000627.html",
    "https://allfamous.org/people/marley-19990627.html",
    "https://allfamous.org/people/oliver-stark-19910627.html",
    "https://allfamous.org/people/vera-wang-19490627.html",
    "https://allfamous.org/people/aitana-19990627.html",
    "https://allfamous.org/people/noboom-19970627.html",
    "https://allfamous.org/people/wonuf-19990627.html",
    "https://allfamous.org/people/boomerna-ybnt.html",
    "https://allfamous.org/people/curtis-harris-20010627.html",
    "https://allfamous.org/people/blake-linder-20010627.html",
    "https://allfamous.org/people/tiana-musarra-19970627.html",
    "https://allfamous.org/people/jj-abrams-19660627.html",
    "https://allfamous.org/people/maxence-danet-fauvel-19930627.html",
    "https://allfamous.org/people/laura-louise-19950627.html",
    "https://allfamous.org/people/jordan-boyle-20020627.html",
    "https://allfamous.org/people/malinda-kathleen-reese-19940627.html",
    "https://allfamous.org/people/lucy-jessica-carter-19900627.html",
    "https://allfamous.org/people/jesse-sebastiani-19930627.html",
    "https://allfamous.org/people/katherine-pan-wlm5.html",
    "https://allfamous.org/people/prajakta-koli-19930627.html",
    "https://allfamous.org/people/yvng-homie-20030627.html",
    "https://allfamous.org/people/bruhitzalex-20010627.html",
    "https://allfamous.org/people/alanna-masterson-19880627.html",
    "https://allfamous.org/people/kimiko-glenn-19890627.html",
    "https://allfamous.org/people/evvie-mckinney-19970627.html",
    "https://allfamous.org/people/hayley-hughes-19960627.html",
    "https://allfamous.org/people/katzun-20000627.html",
    "https://allfamous.org/people/ismail-ibn-musa-menk-19750627.html",
    "https://allfamous.org/people/dan-osborne-19910627.html",
    
    "https://allfamous.org/people/luke-hutch-19980627.html",
    "https://allfamous.org/people/nathan-massey-19920627.html",
    "https://allfamous.org/people/isaiah-crews-20050627.html",
    "https://allfamous.org/people/ondy-mikula-20010627.html",
    "https://allfamous.org/people/christine-lee-19930627.html",
    "https://allfamous.org/people/spock-19950627.html",
    "https://allfamous.org/people/nico-rosberg-19850627.html",
    "https://allfamous.org/people/sistine-stallone-19980627.html",
    "https://allfamous.org/people/brandon-baldwin-19870627.html",
    "https://allfamous.org/people/rakantime-19990627.html",
    "https://allfamous.org/people/marvyn-macnificent-19920627.html",
    "https://allfamous.org/people/bobby-wagner-19900627.html",
    "https://allfamous.org/people/tussygames-prl1.html",
    "https://allfamous.org/people/antoine-dodson-19860627.html",
    "https://allfamous.org/people/lolly-19770627.html",
    "https://allfamous.org/people/joseph-sikora-19760627.html",
    "https://allfamous.org/people/tricia-farrar-19720627.html",
    "https://allfamous.org/people/lance-alexander-20050627.html",
    "https://allfamous.org/people/lonelymailbox-19970627.html",
    "https://allfamous.org/people/lee-chan-19850627.html",
    "https://allfamous.org/people/draco-rosa-19690627.html",
    "https://allfamous.org/people/aiman-tino-19980627.html",
    "https://allfamous.org/people/cece-frey-19910627.html",
    "https://allfamous.org/people/kathryn-beaumont-19380627.html",
    "https://allfamous.org/people/dylan-gardner-19960627.html",
    "https://allfamous.org/people/ravi-kapoor-19690627.html",
    "https://allfamous.org/people/gilli-19920627.html",
    "https://allfamous.org/people/joseph-allen-19370627.html",
    "https://allfamous.org/people/kelley-jakle-19890627.html",
    "https://allfamous.org/people/madylin-sweeten-19910627.html",
    "https://allfamous.org/people/amelia-k-youtube-star.html",
    "https://allfamous.org/people/noah-anderson-20140627.html",
    "https://allfamous.org/people/vicky-jones-19840627.html",
    "https://allfamous.org/people/courtney-ford-19780627.html",
    "https://allfamous.org/people/camo-19920627.html",
    "https://allfamous.org/people/nikki-gould-19950627.html",
    "https://allfamous.org/people/2toesup-19870627.html",
    "https://allfamous.org/people/money-boy-19810627.html",
    "https://allfamous.org/people/emma-lahana-19840627.html",
    "https://allfamous.org/people/jordan-mcdonald-20020627.html",
    "https://allfamous.org/people/kourtney-jorge-19930627.html",
    "https://allfamous.org/people/christian-kane-19740627.html",
    "https://allfamous.org/people/bjaynotfamousyet-19990627.html",
    "https://allfamous.org/people/matt-wilson-19880627.html",
    "https://allfamous.org/people/kris-wright-20010627.html",
    "https://allfamous.org/people/meera-19770627.html",
    "https://allfamous.org/people/michael-ball-19620627.html",
    "https://allfamous.org/people/ben-bocquelet-19800627.html",
    
    "https://allfamous.org/people/jose-antonio-soto-rodriguez-19960627.html",
    "https://allfamous.org/people/audrey-grace-20020627.html",
    "https://allfamous.org/people/rayvon-owen-19910627.html",
    "https://allfamous.org/people/brian-li-19950627.html",
    "https://allfamous.org/people/sandra-alva-19880627.html",
    "https://allfamous.org/people/lemonz-19990627.html",
    "https://allfamous.org/people/eubha-akilade-19980627.html",
    "https://allfamous.org/people/dreog-reacts-19880627.html",
    "https://allfamous.org/people/rejjie-snow-19930627.html",
    "https://allfamous.org/people/lana-torres-20020627.html",
    "https://allfamous.org/people/amy-woodruff-19770627.html",
    "https://allfamous.org/people/sohee-19920627.html",
    "https://allfamous.org/people/lucas-thomas-19990627.html",
    "https://allfamous.org/people/miles-mcmillan-19900627.html",
    "https://allfamous.org/people/eman-moshaya-20100627.html",
    "https://allfamous.org/people/james-holland-19700627.html",
    "https://allfamous.org/people/mason-geick-19960627.html",
    "https://allfamous.org/people/majida-issa-19810627.html",
    "https://allfamous.org/people/tanner-beeston-19930627.html",
    "https://allfamous.org/people/james-breakwell-19850627.html",
    "https://allfamous.org/people/janai-johnson-20050627.html",
    "https://allfamous.org/people/kevin-pietersen-19800627.html",
    "https://allfamous.org/people/julia-maren-baker-20090627.html",
    "https://allfamous.org/people/jaydah-robinett-19990627.html",
    "https://allfamous.org/people/wagner-moura-19760627.html",
    "https://allfamous.org/people/monte-morris-19950627.html",
    "https://allfamous.org/people/drew-thomsen-19880627.html",
    "https://allfamous.org/people/eduarda-silva-19990627.html",
    "https://allfamous.org/people/zappy-tv-19980627.html",
    "https://allfamous.org/people/squirrel-bait-19950627.html",
    "https://allfamous.org/people/ellie-june-20000627.html",
    "https://allfamous.org/people/raul-gonzalez-19770627.html",
    "https://allfamous.org/people/markie-mcmanus-19910627.html",
    "https://allfamous.org/people/sebastian-feichtinger-20000627.html",
    "https://allfamous.org/people/ste-barron-19960627.html",
    "https://allfamous.org/people/sammi-chung-20060627.html",
    "https://allfamous.org/people/amiah-19950627.html",
    "https://allfamous.org/people/rowan-decosto-20060627.html",
    "https://allfamous.org/people/averi-williams-19970627.html",
    "https://allfamous.org/people/tom-steyer-19570627.html",
    "https://allfamous.org/people/esteban-costoso-20000627.html",
    "https://allfamous.org/people/lorrie-morgan-19590627.html",
    "https://allfamous.org/people/dj-cassidy-19810627.html",
    "https://allfamous.org/people/victor-kim-19860627.html",
    "https://allfamous.org/people/zachary-venegas-19950627.html",
    "https://allfamous.org/people/teeteetube-fv9m.html",
    "https://allfamous.org/people/riley-chavez-20000627.html",
    "https://allfamous.org/people/culture-bermudez-9dji.html",
    
    "https://allfamous.org/people/colter-wall-19950627.html",
    "https://allfamous.org/people/jim-edmonds-19700627.html",
    "https://allfamous.org/people/paola-torres-19850627.html",
    "https://allfamous.org/people/brice-johnson-19940627.html",
    "https://allfamous.org/people/isabelle-adjani-19550627.html",
    "https://allfamous.org/people/bianca-oss-19990627.html",
    "https://allfamous.org/people/india-de-beaufort-19870627.html",
    "https://allfamous.org/people/qiuqiu-19870627.html",
    "https://allfamous.org/people/jon-sudano-19910627.html",
    "https://allfamous.org/people/mike-bahia-19870627.html",
    "https://allfamous.org/people/taimak-19640627.html",
    "https://allfamous.org/people/evan-taubenfeld-19830627.html",
    "https://allfamous.org/people/dale-steyn-19830627.html",
    "https://allfamous.org/people/james-forde-19960627.html",
    "https://allfamous.org/people/keonhee-19980627.html",
    "https://allfamous.org/people/cameron-procee-tiktok-star.html",
    "https://allfamous.org/people/kawaii-cookie-squishies-20030627.html",
    "https://allfamous.org/people/young-prince-charles-20010627.html",
    "https://allfamous.org/people/kro-19870627.html",
    "https://allfamous.org/people/ramadan-sobhi-19970627.html",
    "https://allfamous.org/people/tomoya-kanki-19870627.html",
    "https://allfamous.org/people/caoimhe-kelly-19940627.html",
    "https://allfamous.org/people/worthy-20030627.html",
    "https://allfamous.org/people/dana-vicci-acn5.html",
    "https://allfamous.org/people/sean-plott-19860627.html",
    "https://allfamous.org/people/pano-tsaklas-19950627.html",
    "https://allfamous.org/people/christopher-oneill-19740627.html",
    "https://allfamous.org/people/julia-duffy-19510627.html",
    "https://allfamous.org/people/makeup-by-myrna-19880627.html",
    "https://allfamous.org/people/laura-lempika-19890627.html",
    "https://allfamous.org/people/camila-queiroz-19930627.html",
    "https://allfamous.org/people/ryan-quinn-19900627.html",
    "https://allfamous.org/people/matthew-hamlin-19900627.html",
    "https://allfamous.org/people/tyra-bolling-19850627.html",
    "https://allfamous.org/people/kspadetheprospect-19800627.html",
    "https://allfamous.org/people/louannpoy-20020627.html",
    "https://allfamous.org/people/luis-rodriguez-19800627.html",
    "https://allfamous.org/people/makeupbyrabe-20000627.html",
    "https://allfamous.org/people/melissa-riso-19870627.html",
    "https://allfamous.org/people/jim-johnson-19830627.html",
    "https://allfamous.org/people/dana-gagliotti-19920627.html",
    "https://allfamous.org/people/kiana-khansmith-19970627.html",
    "https://allfamous.org/people/julius-thomas-19880627.html",
    "https://allfamous.org/people/bruce-johnston-19420627.html",
    "https://allfamous.org/people/maiya-grace-baldoni-20150627.html",
    "https://allfamous.org/people/elena-lyons-19730627.html",
    "https://allfamous.org/people/vas-halastaras-19970627.html",
    "https://allfamous.org/people/yanira-pache-19910627.html",
    
    "https://allfamous.org/people/oliver-borner-cerda-20020627.html",
    "https://allfamous.org/people/joel-peat-19900627.html",
    "https://allfamous.org/people/briley-powell-19950627.html",
    "https://allfamous.org/people/dewayne-jackson-19950627.html",
    "https://allfamous.org/people/henny-seroeyen-19830627.html",
    "https://allfamous.org/people/shy-odom-20030627.html",
    "https://allfamous.org/people/daisie-smith-19920627.html",
    "https://allfamous.org/people/franco-rodriguez-19980627.html",
    "https://allfamous.org/people/landry-fields-19880627.html",
    "https://allfamous.org/people/david-garcia-20010627.html",
    "https://allfamous.org/people/samantha-magro-sulg.html",
    "https://allfamous.org/people/kanon-wakeshima-19880627.html",
    "https://allfamous.org/people/ahmed-ahmed-19700627.html",
    "https://allfamous.org/people/fuxiaj-20020627.html",
    "https://allfamous.org/people/kira-rausch-19970627.html",
    "https://allfamous.org/people/janusz-kaminski-19590627.html",
    "https://allfamous.org/people/laquan-williams-19880627.html",
    "https://allfamous.org/people/roni-akurati-20020627.html",
    "https://allfamous.org/people/shirley-arica-19890627.html",
    "https://allfamous.org/people/martin-sensmeier-19850627.html",
    "https://allfamous.org/people/mari-monteiro-19970627.html",
    "https://allfamous.org/people/xhesika-berberi-19910627.html",
    "https://allfamous.org/people/corbin-mackin-19880627.html",
    "https://allfamous.org/people/vanessa-grasse-19960627.html",
    "https://allfamous.org/people/breanne-hauenstein-20020627.html",
    "https://allfamous.org/people/nova-houtman-20020627.html",
    "https://allfamous.org/people/michael-mayer-19600627.html",
    "https://allfamous.org/people/rocio-sanchez-azuara-19630627.html",
    "https://allfamous.org/people/heeyitsbenthee-20010627.html",
    "https://allfamous.org/people/bestemsu-ozdemir-19920627.html",
    "https://allfamous.org/people/mayhemmercenary-19990627.html",
    "https://allfamous.org/people/leigh-bingham-nash-19760627.html",
    "https://allfamous.org/people/shelby-luxxbunny-19910627.html",
    "https://allfamous.org/people/colin-tilley-19880627.html",
    "https://allfamous.org/people/lessly-toscano-19950627.html",
    "https://allfamous.org/people/chantel-riley-19860627.html",
    "https://allfamous.org/people/sharon-fredrickson-19700627.html",
    "https://allfamous.org/people/ilyas-maluma-19980627.html",
    "https://allfamous.org/people/julie-ordon-19840627.html",
    "https://allfamous.org/people/jordan-hicks-19920627.html",
    "https://allfamous.org/people/ash-kirnon-19960627.html",
    "https://allfamous.org/people/sanjeev-bhaskar-19610627.html",
    "https://allfamous.org/people/tiffany-jo-allen-19920627.html",
    "https://allfamous.org/people/harrison-jacob-19990627.html",
    "https://allfamous.org/people/julie-clark-19480627.html",
    "https://allfamous.org/people/vlada-garmash-19960627.html",
    "https://allfamous.org/people/maria-stavang-19950627.html",
    "https://allfamous.org/people/krojak-19870627.html",
    
    "https://allfamous.org/people/markiplier-19890628.html",
    "https://allfamous.org/people/elon-musk-19710628.html",
    "https://allfamous.org/people/cooper-noriega-20020628.html",
    "https://allfamous.org/people/rob-dyrdek-19740628.html",
    "https://allfamous.org/people/katelyn-elizabeth-20020628.html",
    "https://allfamous.org/people/curtis-lepore-19830628.html",
    "https://allfamous.org/people/shadical-19990628.html",
    "https://allfamous.org/people/ohmwrecker-19830628.html",
    "https://allfamous.org/people/kevin-de-bruyne-19910628.html",
    "https://allfamous.org/people/presley-smith-20150628.html",
    "https://allfamous.org/people/honey-tingles-20060628.html",
    "https://allfamous.org/people/jeff-tingz-20000628.html",
    "https://allfamous.org/people/nikki-mudarris-19900628.html",
    "https://allfamous.org/people/angel-mogaka-20010628.html",
    "https://allfamous.org/people/jayden-foley-20170628.html",
    "https://allfamous.org/people/robert-latsky-19920628.html",
    "https://allfamous.org/people/kathy-bates-19480628.html",
    "https://allfamous.org/people/sire-20040628.html",
    "https://allfamous.org/people/aileen-quinn-19710628.html",
    "https://allfamous.org/people/chayanne-19680628.html",
    "https://allfamous.org/people/bradley-beal-19930628.html",
    "https://allfamous.org/people/mckayla-adkins-20000628.html",
    "https://allfamous.org/people/mel-brooks-19260628.html",
    "https://allfamous.org/people/frederic-chen-20010628.html",
    "https://allfamous.org/people/tichina-arnold-19690628.html",
    "https://allfamous.org/people/felicia-day-19790628.html",
    "https://allfamous.org/people/hyojin-19990628.html",
    "https://allfamous.org/people/hannah-ridgeway-19950628.html",
    "https://allfamous.org/people/ansley-burns-20060628.html",
    "https://allfamous.org/people/diamond-strawberry-19880628.html",
    "https://allfamous.org/people/john-elway-19600628.html",
    "https://allfamous.org/people/skyla-carpenter-20050628.html",
    "https://allfamous.org/people/lexus-scheller-20010628.html",
    "https://allfamous.org/people/kellie-pickler-19860628.html",
    "https://allfamous.org/people/john-cusack-19660628.html",
    "https://allfamous.org/people/savage-19810628.html",
    "https://allfamous.org/people/john-rink-20010628.html",
    "https://allfamous.org/people/joo-hyun-seo-19910628.html",
    "https://allfamous.org/people/zoe-donahoe-20000628.html",
    "https://allfamous.org/people/braceefacekay-tiktok-star.html",
    "https://allfamous.org/people/nicholas-philmon-20040628.html",
    "https://allfamous.org/people/makya-griffin-20010628.html",
    "https://allfamous.org/people/blake-grzegorczyk-20000628.html",
    "https://allfamous.org/people/izzy-fairthorne-vicm.html",
    "https://allfamous.org/people/twani-price-19960628.html",
    "https://allfamous.org/people/jeff-cavaliere-19750628.html",
    "https://allfamous.org/people/frannyr-20000628.html",
    "https://allfamous.org/people/biran-damla-yilmaz-19970628.html",
    
    "https://allfamous.org/people/caillou-pettis-20000628.html",
    "https://allfamous.org/people/zee-carrino-19910628.html",
    "https://allfamous.org/people/xclusivejay-20010628.html",
    "https://allfamous.org/people/kang-min-hyuk-19910628.html",
    "https://allfamous.org/people/edith-marie-19940628.html",
    "https://allfamous.org/people/tamara-ecclestone-19840628.html",
    "https://allfamous.org/people/gabriel-gundacker-19910628.html",
    "https://allfamous.org/people/ramirez-19980628.html",
    "https://allfamous.org/people/laura-g-19850628.html",
    "https://allfamous.org/people/ruben-reuter-20000628.html",
    "https://allfamous.org/people/hannah-alligood-20030628.html",
    "https://allfamous.org/people/jaidencurls-20010628.html",
    "https://allfamous.org/people/maya-cooper-evans-evn8.html",
    "https://allfamous.org/people/ella-e-k-forever-20020628.html",
    "https://allfamous.org/people/adam-woodyatt-19680628.html",
    "https://allfamous.org/people/malachai-spivey-19960628.html",
    "https://allfamous.org/people/heather-welsch-20020628.html",
    "https://allfamous.org/people/zara-cecilie-leite-20010628.html",
    "https://allfamous.org/people/ogchan-19970628.html",
    "https://allfamous.org/people/chad-jaxon-perez-19900628.html",
    "https://allfamous.org/people/steve-burton-19700628.html",
    "https://allfamous.org/people/daehyun-19930628.html",
    "https://allfamous.org/people/dj-vlad-19730628.html",
    "https://allfamous.org/people/peso-peso-19950628.html",
    "https://allfamous.org/people/koala-puffs-19940628.html",
    "https://allfamous.org/people/noah-superherokids-20090628.html",
    "https://allfamous.org/people/charlie-clapham-19910628.html",
    "https://allfamous.org/people/verlisify-19930628.html",
    "https://allfamous.org/people/spencer-paysinger-19880628.html",
    "https://allfamous.org/people/cree-mowry-hardrict-20110628.html",
    "https://allfamous.org/people/yaron-versano-19750628.html",
    "https://allfamous.org/people/marliesia-ortiz-19980628.html",
    "https://allfamous.org/people/jasmine-richards-19900628.html",
    "https://allfamous.org/people/tiara-nicole-19890628.html",
    "https://allfamous.org/people/brisco-19820628.html",
    "https://allfamous.org/people/milly-smith-19930628.html",
    "https://allfamous.org/people/jasmin-bhasin-19900628.html",
    "https://allfamous.org/people/kkarrrambaby-qjdr.html",
    "https://allfamous.org/people/kale-mcallister-20010628.html",
    "https://allfamous.org/people/akira-sky-20030628.html",
    "https://allfamous.org/people/edvinas-navickas-19970628.html",
    "https://allfamous.org/people/arris-quinones-19870628.html",
    "https://allfamous.org/people/danielle-brisebois-19690628.html",
    "https://allfamous.org/people/bai-daugh-19910628.html",
    "https://allfamous.org/people/ali-caldwell-19880628.html",
    "https://allfamous.org/people/shakur-stevenson-19970628.html",
    "https://allfamous.org/people/roger-raker-19980628.html",
    "https://allfamous.org/people/emiliano-flores-19970628.html",
    
    "https://allfamous.org/people/ha-ji-won-19780628.html",
    "https://allfamous.org/people/natalie-friedman-19900628.html",
    "https://allfamous.org/people/brandon-phillips-19810628.html",
    "https://allfamous.org/people/tianna-holmes-20000628.html",
    "https://allfamous.org/people/alexx-calise-19850628.html",
    "https://allfamous.org/people/babatunde-fashola-19630628.html",
    "https://allfamous.org/people/karlo-gutierrez-20020628.html",
    "https://allfamous.org/people/mike-white-19700628.html",
    "https://allfamous.org/people/michael-jacobs-19550628.html",
    "https://allfamous.org/people/dani-shay-19880628.html",
    "https://allfamous.org/people/celine-polenghi-19970628.html",
    "https://allfamous.org/people/jeremy-fiedler-20010628.html",
    "https://allfamous.org/people/keana-marie-19950628.html",
    "https://allfamous.org/people/lil-muk-20010628.html",
    "https://allfamous.org/people/jessica-hecht-19650628.html",
    "https://allfamous.org/people/fairyfreak-u1tr.html",
    "https://allfamous.org/people/john-mcguire-19880628.html",
    "https://allfamous.org/people/tj-valdez-jjtd.html",
    "https://allfamous.org/people/claro-the-third-19960628.html",
    "https://allfamous.org/people/ellie-schnitt-19960628.html",
    "https://allfamous.org/people/mataya-sweeting-19990628.html",
    "https://allfamous.org/people/ekt-40-19970628.html",
    "https://allfamous.org/people/lorraine-stanley-19760628.html",
    "https://allfamous.org/people/mary-stuart-masterson-19660628.html",
    "https://allfamous.org/people/jeanette-aw-19790628.html",
    "https://allfamous.org/people/john-lee-19520628.html",
    "https://allfamous.org/people/bru-c-19910628.html",
    "https://allfamous.org/people/demi-leigh-nel-peters-19950628.html",
    "https://allfamous.org/people/jeffrey-shih-19870628.html",
    "https://allfamous.org/people/brady-good-19960628.html",
    "https://allfamous.org/people/david-visentin-19650628.html",
    "https://allfamous.org/people/raneem-19860628.html",
    "https://allfamous.org/people/daniel-webber-19880628.html",
    "https://allfamous.org/people/tycerx-19970628.html",
    "https://allfamous.org/people/rooh-naqvi-19970628.html",
    "https://allfamous.org/people/turkan-soray-19450628.html",
    "https://allfamous.org/people/amber-dowding-19930628.html",
    "https://allfamous.org/people/trick-trick-19730628.html",
    "https://allfamous.org/people/vishal-dadlani-19730628.html",
    "https://allfamous.org/people/sean-dyche-19710628.html",
    "https://allfamous.org/people/emma-gaedele-20020628.html",
    "https://allfamous.org/people/jon-watts-19810628.html",
    "https://allfamous.org/people/shadia-simmons-19860628.html",
    "https://allfamous.org/people/salah-19790628.html",
    "https://allfamous.org/people/amy-chapman-20060628.html",
    "https://allfamous.org/people/maui-taylor-19830628.html",
    "https://allfamous.org/people/madeline-duggan-19940628.html",
    "https://allfamous.org/people/alessio-bianchi-19950628.html",
    
    "https://allfamous.org/people/aire-justin-19890628.html",
    "https://allfamous.org/people/laney-redmon-19940628.html",
    "https://allfamous.org/people/lacey-schwimmer-19880628.html",
    "https://allfamous.org/people/antonia-bosman-19960628.html",
    "https://allfamous.org/people/rin-19940628.html",
    "https://allfamous.org/people/chris-grant-19880628.html",
    "https://allfamous.org/people/laila-montero-19990628.html",
    "https://allfamous.org/people/demarai-gray-19960628.html",
    "https://allfamous.org/people/noah-north-19940628.html",
    "https://allfamous.org/people/victoria-henley-19930628.html",
    "https://allfamous.org/people/benito-martinez-19710628.html",
    "https://allfamous.org/people/yvette-young-19910628.html",
    "https://allfamous.org/people/pelayo-diaz-19860628.html",
    "https://allfamous.org/people/elvira-devinamira-19930628.html",
    "https://allfamous.org/people/purrluna-19940628.html",
    "https://allfamous.org/people/araya-a-hargate-19810628.html",
    "https://allfamous.org/people/george-mccurdy-19810628.html",
    "https://allfamous.org/people/carissa-rosario-19880628.html",
    "https://allfamous.org/people/steve-downes-19610628.html",
    "https://allfamous.org/people/camille-guaty-19760628.html",
    "https://allfamous.org/people/jason-tam-19820628.html",
    "https://allfamous.org/people/alice-krige-19540628.html",
    "https://allfamous.org/people/bruce-davison-19460628.html",
    "https://allfamous.org/people/marco-bianchi-19950628.html",
    "https://allfamous.org/people/ayelet-zurer-19690628.html",
    "https://allfamous.org/people/grazi-massafera-19820628.html",
    "https://allfamous.org/people/viktoria-nikulina-20000628.html",
    "https://allfamous.org/people/vivian-dsena-19880628.html",
    "https://allfamous.org/people/jasmine-avis-19950628.html",
    "https://allfamous.org/people/andreas-honnet-19930628.html",
    "https://allfamous.org/people/alexander-johnson-19900628.html",
    "https://allfamous.org/people/muhammad-yunus-19400628.html",
    "https://allfamous.org/people/maya-stojan-19860628.html",
    "https://allfamous.org/people/erko-jun-19900628.html",
    "https://allfamous.org/people/terrence-williams-19870628.html",
    "https://allfamous.org/people/june-quan-19870628.html",
    "https://allfamous.org/people/ryan-adams-tiktok-af1z.html",
    "https://allfamous.org/people/eugen-kazakov-19940628.html",
    "https://allfamous.org/people/silas-lawrence-19990628.html",
    "https://allfamous.org/people/mackenzie-hyatt-19960628.html",
    "https://allfamous.org/people/reka-rubint-19780628.html",
    "https://allfamous.org/people/carter-gregory-19930628.html",
    "https://allfamous.org/people/dea-rizkita-19930628.html",
    "https://allfamous.org/people/anish-giri-19940628.html",
    "https://allfamous.org/people/maximus-rigby-20030628.html",
    "https://allfamous.org/people/daniel-zovatto-19910628.html",
    "https://allfamous.org/people/dj-raines-19940628.html",
    "https://allfamous.org/people/ali-drew-19900628.html",
    
    "https://allfamous.org/people/jen-deleon-19900628.html",
    "https://allfamous.org/people/brittani-schwartz-19920628.html",
    "https://allfamous.org/people/elaine-thompson-19920628.html",
    "https://allfamous.org/people/el-yordy-20010628.html",
    "https://allfamous.org/people/phil-bardsley-19850628.html",
    "https://allfamous.org/people/frida-soderstrom-20040628.html",
    "https://allfamous.org/people/anthony-perez-19850628.html",
    "https://allfamous.org/people/daisy-turner-19900628.html",
    "https://allfamous.org/people/crisana-mariyah-19920628.html",
    "https://allfamous.org/people/wahab-riaz-19850628.html",
    "https://allfamous.org/people/katelynn-nolan-19990628.html",
    "https://allfamous.org/people/johnta-austin-19800628.html",
    "https://allfamous.org/people/suzuko-mimori-19860628.html",
    "https://allfamous.org/people/mark-stoermer-19770628.html",
    "https://allfamous.org/people/yael-yurman-20010628.html",
    "https://allfamous.org/people/sononoah-20020628.html",
    "https://allfamous.org/people/marcus-williams-19870628.html",
    "https://allfamous.org/people/alessandro-nivola-19720628.html",
    "https://allfamous.org/people/david-bowers-19700628.html",
    "https://allfamous.org/people/laura-gallacher-19870628.html",
    "https://allfamous.org/people/peter-linz-19670628.html",
    "https://allfamous.org/people/marco-barrientos-19630628.html",
    "https://allfamous.org/people/dawn-kirkland-19980628.html",
    "https://allfamous.org/people/gil-bellows-19670628.html",
    "https://allfamous.org/people/joey-phillips-19700628.html",
    "https://allfamous.org/people/jheel-mehta-19950628.html",
    "https://allfamous.org/people/troy-doherty-19960628.html",
    "https://allfamous.org/people/measha-brueggergosman-19770628.html",
    "https://allfamous.org/people/luis-curiel-19900628.html",
    "https://allfamous.org/people/malia-martinez-19970628.html",
    "https://allfamous.org/people/wioleth-19970628.html",
    "https://allfamous.org/people/kerri-verna-19740628.html",
    "https://allfamous.org/people/emerson-lobo-19940628.html",
    "https://allfamous.org/people/sandiaga-salahuddin-uno-19690628.html",
    "https://allfamous.org/people/raquel-cordova-19820628.html",
    "https://allfamous.org/people/evgeny-bondarenko-yypx.html",
    "https://allfamous.org/people/nyomi-gray-19860628.html",
    "https://allfamous.org/people/carolina-jaramillo-19890628.html",
    "https://allfamous.org/people/anny-duperey-19470628.html",
    "https://allfamous.org/people/janine-duvitski-19520628.html",
    "https://allfamous.org/people/brady-burchett-20010628.html",
    "https://allfamous.org/people/cellotherapper-19980628.html",
    "https://allfamous.org/people/viola-brand-19940628.html",
    "https://allfamous.org/people/donald-johanson-19430628.html",
    "https://allfamous.org/people/emma-gould-19980628.html",
    "https://allfamous.org/people/lalla-ward-19510628.html",
    "https://allfamous.org/people/frank-zane-19420628.html",
    "https://allfamous.org/people/sabrina-ferilli-19640628.html",
    
    "https://allfamous.org/people/camila-mendes-19940629.html",
    "https://allfamous.org/people/smallishbeans-19930629.html",
    "https://allfamous.org/people/dom-zeglaitis-19950629.html",
    "https://allfamous.org/people/zion-kuwonu-19990629.html",
    "https://allfamous.org/people/nicole-scherzinger-19780629.html",
    "https://allfamous.org/people/milessdespair-20010629.html",
    "https://allfamous.org/people/kawhi-leonard-19910629.html",
    "https://allfamous.org/people/the-gemini-20000629.html",
    "https://allfamous.org/people/oliver-tree-19930629.html",
    "https://allfamous.org/people/colette-butler-19820629.html",
    "https://allfamous.org/people/abdel-na-19990629.html",
    "https://allfamous.org/people/ellie-ana-20090629.html",
    "https://allfamous.org/people/jaycoset-20010629.html",
    "https://allfamous.org/people/kia-pegg-20000629.html",
    "https://allfamous.org/people/princess-andre-20070629.html",
    "https://allfamous.org/people/jackie-ybarra-20020629.html",
    "https://allfamous.org/people/yub-19870629.html",
    "https://allfamous.org/people/gjons-tears-e5es.html",
    "https://allfamous.org/people/colin-jost-19820629.html",
    "https://allfamous.org/people/lily-rabe-19820629.html",
    "https://allfamous.org/people/jordan-jones-19900629.html",
    "https://allfamous.org/people/rhys-herbert-20000629.html",
    "https://allfamous.org/people/suzette-quintanilla-19670629.html",
    "https://allfamous.org/people/charlamagne-tha-god-19780629.html",
    "https://allfamous.org/people/jonna-jinton-19890629.html",
    "https://allfamous.org/people/marlhy-murphy-20020629.html",
    "https://allfamous.org/people/jerry-rig-everything-19880629.html",
    "https://allfamous.org/people/jules-alice-20070629.html",
    "https://allfamous.org/people/adam-g-sevani-19920629.html",
    "https://allfamous.org/people/tyler-ziegler-19950629.html",
    "https://allfamous.org/people/natee-b-20010629.html",
    "https://allfamous.org/people/matthew-mercer-19820629.html",
    "https://allfamous.org/people/sauce-walka-19900629.html",
    "https://allfamous.org/people/michael-porter-jr-19980629.html",
    "https://allfamous.org/people/alexys-nycole-sanchez-20030629.html",
    "https://allfamous.org/people/gary-busey-19440629.html",
    "https://allfamous.org/people/erik-barber-19990629.html",
    "https://allfamous.org/people/ssn-santa-19990629.html",
    "https://allfamous.org/people/kirsty-belle-addison-20010629.html",
    "https://allfamous.org/people/domplays-19950629.html",
    "https://allfamous.org/people/george-sampson-19930629.html",
    "https://allfamous.org/people/nathan-vandergunst-19990629.html",
    "https://allfamous.org/people/daddy-kane-19850629.html",
    "https://allfamous.org/people/erica-mohn-kvam-19960629.html",
    "https://allfamous.org/people/cicicici7-20000629.html",
    "https://allfamous.org/people/ana-heichel-20020629.html",
    "https://allfamous.org/people/blair-dreelan-19840629.html",
    "https://allfamous.org/people/courtney-green-19950629.html",
    
    "https://allfamous.org/people/cierra-michelle-memmott-19970629.html",
    "https://allfamous.org/people/kayley-melissa-19900629.html",
    "https://allfamous.org/people/ferdia-shaw-20040629.html",
    "https://allfamous.org/people/jared-ryan-tousley-19980629.html",
    "https://allfamous.org/people/rebeca-stones-20000629.html",
    "https://allfamous.org/people/redmond-gerard-20000629.html",
    "https://allfamous.org/people/alyssa-valdez-19930629.html",
    "https://allfamous.org/people/mc-magic-19700629.html",
    "https://allfamous.org/people/sam-bailey-19770629.html",
    "https://allfamous.org/people/eckosoldier-19930629.html",
    "https://allfamous.org/people/evan-roderick-19950629.html",
    "https://allfamous.org/people/louaira-dela-cruz-20000629.html",
    "https://allfamous.org/people/gzuz-19880629.html",
    "https://allfamous.org/people/kenzay-rivers-20010629.html",
    "https://allfamous.org/people/derryl-bailey-20010629.html",
    "https://allfamous.org/people/katherine-jenkins-19800629.html",
    "https://allfamous.org/people/melora-hardin-19670629.html",
    "https://allfamous.org/people/tinfoil-chef-19590629.html",
    "https://allfamous.org/people/jude-bellingham-20030629.html",
    "https://allfamous.org/people/charron-19910629.html",
    "https://allfamous.org/people/sarah-gracie-19920629.html",
    "https://allfamous.org/people/addison-timlin-19910629.html",
    "https://allfamous.org/people/timeworks-20010629.html",
    "https://allfamous.org/people/sam-lavagnino-20060629.html",
    "https://allfamous.org/people/armaniftl-20010629.html",
    "https://allfamous.org/people/jake-cornell-20020629.html",
    "https://allfamous.org/people/vasilis-kyriakopoulos-20020629.html",
    "https://allfamous.org/people/camille-purcell-19890629.html",
    "https://allfamous.org/people/jovanie-20010629.html",
    "https://allfamous.org/people/troy-deeney-19880629.html",
    "https://allfamous.org/people/katelyn-elizabeth-20010629.html",
    "https://allfamous.org/people/alva-inga-instagram-star.html",
    "https://allfamous.org/people/emilio-sakraya-19960629.html",
    "https://allfamous.org/people/dizaster-19840629.html",
    "https://allfamous.org/people/joe-johnson-19810629.html",
    "https://allfamous.org/people/maddie-goetz-20000629.html",
    "https://allfamous.org/people/marc-lukasiak-19750629.html",
    "https://allfamous.org/people/isabelle-weall-20030629.html",
    "https://allfamous.org/people/bebe-coronel-19920629.html",
    "https://allfamous.org/people/rebeltaxi-19920629.html",
    "https://allfamous.org/people/payton-earnest-20030629.html",
    "https://allfamous.org/people/ashley-martelle-19950629.html",
    "https://allfamous.org/people/russell-fabito-19980629.html",
    "https://allfamous.org/people/matt-gallagher-19920629.html",
    "https://allfamous.org/people/cisco-rosado-19790629.html",
    "https://allfamous.org/people/zaria-mosley-19990629.html",
    "https://allfamous.org/people/martin-truex-jr-19800629.html",
    "https://allfamous.org/people/john-feldmann-19670629.html",
    
    "https://allfamous.org/people/harrison-gilbertson-19930629.html",
    "https://allfamous.org/people/elina-born-19940629.html",
    "https://allfamous.org/people/peter-monn-19720629.html",
    "https://allfamous.org/people/lorenzo-james-henrie-19930629.html",
    "https://allfamous.org/people/brian-darcy-james-19680629.html",
    "https://allfamous.org/people/shauna-rae-dv5n.html",
    "https://allfamous.org/people/nawal-al-zoghbi-19720629.html",
    "https://allfamous.org/people/emily-skinner-19700629.html",
    "https://allfamous.org/people/koolasloui-20010629.html",
    "https://allfamous.org/people/kallie-hardin-20010629.html",
    "https://allfamous.org/people/blake-richardson-19840629.html",
    "https://allfamous.org/people/ludwig-kronstrand-19970629.html",
    "https://allfamous.org/people/spiffy-19990629.html",
    "https://allfamous.org/people/anna-victoria-19880629.html",
    "https://allfamous.org/people/foteini-aristakesyan-19910629.html",
    "https://allfamous.org/people/sarah-power-19860629.html",
    "https://allfamous.org/people/mary-senn-19930629.html",
    "https://allfamous.org/people/julz-michele-20010629.html",
    "https://allfamous.org/people/ben-morton-19810629.html",
    "https://allfamous.org/people/jordi-cruz-19780629.html",
    "https://allfamous.org/people/jazz-anderson-19960629.html",
    "https://allfamous.org/people/traquan-ragsdale-jfub.html",
    "https://allfamous.org/people/heather-gay-19820629.html",
    "https://allfamous.org/people/sophia-sluyter-20050629.html",
    "https://allfamous.org/people/edward-maya-19860629.html",
    "https://allfamous.org/people/rose-namajunas-19920629.html",
    "https://allfamous.org/people/oliwia-sawinska-20010629.html",
    "https://allfamous.org/people/busy-b-asmr-19950629.html",
    "https://allfamous.org/people/sam-ball-19730629.html",
    "https://allfamous.org/people/vinnie-sarcone-20010629.html",
    "https://allfamous.org/people/sumi-appleberry-19980629.html",
    "https://allfamous.org/people/will-kemp-19770629.html",
    "https://allfamous.org/people/kay-marie-19950629.html",
    "https://allfamous.org/people/gray-evans-20010629.html",
    "https://allfamous.org/people/salmo-19840629.html",
    "https://allfamous.org/people/elsa-majimbo-20010629.html",
    "https://allfamous.org/people/dj-pooh-19660629.html",
    "https://allfamous.org/people/lisa-zimouche-19990629.html",
    "https://allfamous.org/people/jerid-yaw-19850629.html",
    "https://allfamous.org/people/fran-kirby-19930629.html",
    "https://allfamous.org/people/jordan-ring-19830629.html",
    "https://allfamous.org/people/worthy-rigelsky-20090629.html",
    "https://allfamous.org/people/ilan-mitchell-smith-19690629.html",
    "https://allfamous.org/people/basuki-tjahaja-purnama-19660629.html",
    "https://allfamous.org/people/diydan-lopez-19940629.html",
    "https://allfamous.org/people/bryce-dettloff-19960629.html",
    "https://allfamous.org/people/james-sight-20000629.html",
    "https://allfamous.org/people/the-luna-diaries-19940629.html",
    
    "https://allfamous.org/people/don-moen-19500629.html",
    "https://allfamous.org/people/ellie-james-19950629.html",
    "https://allfamous.org/people/daijah-nicole-19920629.html",
    "https://allfamous.org/people/mibella-vargas-20070629.html",
    "https://allfamous.org/people/laura-rouder-20030629.html",
    "https://allfamous.org/people/emily-herren-19940629.html",
    "https://allfamous.org/people/mark-zimmerman-19910629.html",
    "https://allfamous.org/people/sharon-lawrence-19610629.html",
    "https://allfamous.org/people/christopher-egan-19840629.html",
    "https://allfamous.org/people/cginferno-19940629.html",
    "https://allfamous.org/people/zorica-brunclik-19550629.html",
    "https://allfamous.org/people/robert-homayoon-19850629.html",
    "https://allfamous.org/people/richard-lewis-19470629.html",
    "https://allfamous.org/people/joel-mccrary-19670629.html",
    "https://allfamous.org/people/lance-barber-19730629.html",
    "https://allfamous.org/people/jacob-roberts-19900629.html",
    "https://allfamous.org/people/steven-hauschka-19850629.html",
    "https://allfamous.org/people/nikita-willy-19940629.html",
    "https://allfamous.org/people/kevin-manno-19830629.html",
    "https://allfamous.org/people/lucas-steele-19790629.html",
    "https://allfamous.org/people/kaiser-orion-griffith-20140629.html",
    "https://allfamous.org/people/aldilla-hopkin-hamid-19920629.html",
    "https://allfamous.org/people/christina-chang-19710629.html",
    "https://allfamous.org/people/rebecca-moroney-19900629.html",
    "https://allfamous.org/people/jessy-erinn-19940629.html",
    "https://allfamous.org/people/mark-radcliffe-19580629.html",
    "https://allfamous.org/people/harish-kalyan-19900629.html",
    "https://allfamous.org/people/mel-stringer-19880629.html",
    "https://allfamous.org/people/aidan-oshea-19900629.html",
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
