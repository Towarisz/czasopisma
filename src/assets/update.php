<?php

    header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json, charset=utf-8');
    $data = json_decode(file_get_contents("php://input"), true);
    $doc = new DOMDocument();
    $doc->load("./assets/czasopisma.xml");

    $new=$doc->createElement($data["name"]);
    $el2=$doc->createElement("src", $data["src"]);
    $el3=$doc->createElement("klik", $data["name"]);
    $el4=$doc->createElement($data["name"], $data["years"]);

    $new->appendChild($el2);
    $new->appendChild($el3);

    $parent = $doc->getElementsByTagName('lata')->item(0);
    $childs = $doc->getElementsByTagName($data["id"])->item(1);
    $childs->parentNode->replaceChild($el4, $childs);

    $parent = $doc->getElementsByTagName('zmienne')->item(0);
    $childs = $doc->getElementsByTagName($data["id"])->item(0);
    $childs->parentNode->replaceChild($new, $childs);

    $doc->save("./assets/czasopisma.xml");

?>
