<?php

namespace Faker\Provider\de_DE;

class Address extends \Faker\Provider\Address
{
    protected static $buildingNumber = array('%##', '%#', '%', '%/%', '%#[abc]', '%[abc]');

    protected static $streetSuffixLong = array(
        'Gasse', 'Platz', 'Ring', 'Straße', 'Weg', 'Allee'
    );
    protected static $streetSuffixShort = array(
        'gasse', 'platz', 'ring', 'straße', 'str.', 'weg', 'allee'
    );

    protected static $postcode = array('#####');

    /**
     * @var array
     * @see https://de.wikipedia.org/wiki/Liste_der_Gro%C3%9F-_und_Mittelst%C3%A4dte_in_Deutschland
     */
    protected static $cityNames = array(
        'Aachen', 'Aalen', 'Achern', 'Achim', 'Ahaus', 'Ahlen', 'Ahrensburg', 'Aichach', 'Albstadt', 'Alfter', 'Alsdorf', 'Altenburg', 'Amberg', 'Andernach', 'Annaberg-Buchholz', 'Ansbach', 'Apolda', 'Arnsberg', 'Arnstadt', 'Aschaffenburg', 'Aschersleben', 'Attendorn', 'Augsburg', 'Aurich',
        'Backnang', 'Bad Harzburg', 'Bad Hersfeld', 'Bad Homburg vor der Höhe', 'Bad Honnef', 'Bad Kissingen', 'Bad Kreuznach', 'Bad Mergentheim', 'Bad Nauheim', 'Bad Neuenahr-Ahrweiler', 'Bad Oeynhausen', 'Bad Oldesloe', 'Bad Rappenau', 'Bad Salzuflen', 'Bad Soden am Taunus', 'Bad Vilbel', 'Bad Waldsee', 'Bad Zwischenahn', 'Baden-Baden', 'Baesweiler', 'Balingen', 'Bamberg', 'Barsinghausen', 'Baun