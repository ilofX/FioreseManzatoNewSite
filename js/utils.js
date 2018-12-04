/*
    Copyright 2018 Filippo Stella

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */

//Variables Declaration
var i18n;

//Functions
function utils_init() {
    $(document).ready(function () {

        //Check to see if the window is top if not then display button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scroll-to-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });

    });
}

function utils_init_sidebar() {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        // hide sidebar
        $('#sidebar').removeClass('active');
        // hide overlay
        $('.overlay').removeClass('active');
        //move content
        $('#body').removeClass('noXoverflow');
    });

    $('#sidebarCollapse').on('click', function () {
        // open sidebar
        $('#sidebar').addClass('active');
        // fade in the overlay
        $('.overlay').addClass('active');
        //move content
        $('#body').addClass('noXoverflow');
    });
}

function init_locale() {
    i18n = $.i18n();
    i18n.locale = "en";
    load_locale(i18n);
    $.i18n.debug = false;
    $("body").i18n();
}

function load_locale(i18n) {
    i18n.load({
        "@metadata": {
            "authors": [
                "Filippo"
            ],
            "last-updated": "2018-11-22",
            "message-documentation": "Language translation file"
        },
        "en": {
            "site-title": "Fiorese & Manzato",
            "site-subtitle": "Accountant and Law Firm",
            "site-introduction": "This is an example text for a generic introduction",
            "titolo": "Titolo del sito"
        },
        "it": {
            "site-title": "Fiorese & Manzato",
            "site-subtitle": "Studio Commercialistico e Legale",
            "site-introduction": "Questo è un testo di esempio per una generica introduzione"
        }
    });
}
