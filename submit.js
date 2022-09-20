


const formId = 'save-later-form';
const url = location.href;
const formIdentifier = `${url} ${formId}`;
const saveButton = document.querySelector('#submitbtn');

let form = document.querySelector(`#${formId}`);
let formElements = form.elements;

const getFormData = () => {
    let data = { [formIdentifier]: {} };
    for (const element of formElements) {
        if (element.name.length > 0) {
                data[formIdentifier][element.name] = element.value;
        }
    }
    return data;
};

saveButton.onclick = event => {
    event.preventDefault();
    data = getFormData();
    localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
    window.print();
};



const populateForm = () => {
    if (localStorage.key(formIdentifier)) {
        const savedData = JSON.parse(localStorage.getItem(formIdentifier));

        console.log(savedData);
        console.log(savedData.pocether);

        pocetHer = savedData.pocether;
        $('.popisher').remove();
        for (let i = pocetHer; i >= 1; i--) {

            let newLabel = 'Popis hry ' + i;
            let nameTextarea = 'popisher' + i;

            //console.log(newLabel);
            $('#divpocether').after('<div class="popisher"><label for="popisher" id="labelpopishernext"></label><textarea class="textfield" id="textareanext" rows = "1" ></textarea></div>');
            $('#labelpopishernext').text(newLabel);
            $('#textareanext').attr('name', nameTextarea);

            $('textarea').each(function () {
                this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
            }).on('input', function () {
                this.style.height = 'auto';
                this.style.height = (this.scrollHeight) + 'px';
            });
        };






        for (const element of formElements) {
            if (element.name in savedData) {
                element.value = savedData[element.name];
            }
        }
     }
};
document.onload = populateForm();



//console.log(formIdentifier);



/*


$('#submitbtn').on('click', (e) => {
    e.preventDefault();

    function serializeArrayIncludingDisabledFields(form) {
        let fields = form.find('[disabled]');
        fields.prop('disabled', false);
        let submitData = form.serializeArray();
        fields.prop('disabled', true);
        return submitData;
    };

    let formular = $('form');
    let dataSubmit = (serializeArrayIncludingDisabledFields(formular));
    let dataSubmitJson = JSON.stringify(dataSubmit);
    localStorage.setItem('form-data', dataSubmitJson);


    //ukladani a tisk souboru

    window.print();



    /* generate pdf
    let tlacitko = document.getElementById('generatebtn');
    console.log(tlacitko);

    tlacitko.addEventListener('click', () => {

        let zakaznik = document.getElementById('zakaznik').value;
        let nazevLot = document.getElementById('nazevlosu').value;

        console.log(zakaznik);
        console.log(nazevLot);

        let fileName = 'formular-' + zakaznik + '-' + nazevLot + '.pdf';
        console.log(fileName);

        let opt = {
            margin: 1,
            filename: fileName,
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };


        let elementToPrint = document.getElementById('element-to-print');
        //html2pdf(elementToPrint);

        // New Promise-based usage:
        html2pdf().set(opt).from(elementToPrint).save();

});


});

*/

