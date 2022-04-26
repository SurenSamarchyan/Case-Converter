function upperCase( text ) {
    return text.toUpperCase()
}

function lowerCase( text ) {
    return text.toLowerCase()
}

function properCase( text ) {
    return text.split( " " ).map( ( word ) => {
        return word[0].toUpperCase() + word.slice( 1 ).toLowerCase()
    } ).join( " " );
}

function downloadTextArea( text ) {
    const element = document.createElement( 'a' );
    element.setAttribute( 'href', 'data:text/plain;charset=utf-8,' + encodeURIComponent( text ) );
    element.setAttribute( 'download', "text.txt" );
    element.style.display = 'none';
    document.body.appendChild( element );
    element.click();
    document.body.removeChild( element );
}

function sentenceCase( text ) {
    return text.split( ". " )
        .map( sentence => {
            return sentence[0].toUpperCase() + sentence.slice( 1 ).toLowerCase()
        } ).join( ". " )

}

function textAreaHandel( event ) {
    const textArea = document.querySelector( "textarea" )

    switch ( event.target.id ) {
        case "upper-case" :
            textArea.value = upperCase( textArea.value );
            break
        case "lower-case" :
            textArea.value = lowerCase( textArea.value );
            break
        case "proper-case" :
            textArea.value = properCase( textArea.value );
            break
        case "sentence-case":
            textArea.value = sentenceCase( textArea.value );
            break
        case "save-text-file":
            downloadTextArea( textArea.value );
    }
}

const buttons = document.querySelectorAll( "#case-converter .btn" )

buttons.forEach( elm => {
    elm.addEventListener( "click", textAreaHandel, true )
} )










