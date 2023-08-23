//import * as monaco from 'monaco-editor';
// import filecontroller
//import { initFileOperations, getSavedRegexes } from './file_controller.js';

const darkMode = document.getElementById('dark-mode');
const modelSelector = document.getElementById('form-selector');
const btnSaveRegex = document.getElementById('save-regex');
const regexName = document.getElementById('regex-name');
const regexPattern = document.getElementById('regex-pattern');

require.config({ paths: { vs: '../node_modules/monaco-editor/min/vs' } });
require(['vs/editor/editor.main'], function () {

    var editor = monaco.editor.create(document.getElementById('container'), {
        value: 'Click the button in the upper left corner for learn how to use.\nYou can open the settings drawer by clicking the button in the upper right corner.\n\nLorem ipsum dolor sit amet consectetur, adipisicing elit.\nDolorum eveniet illum aspernatur veniam quam aliquam, eum incidunt vero, vitae fuga accusantium consequatur officiis quod culpa excepturi impedit tempore nesciunt illo error blanditiis.\nQuos voluptatem inventore enim deserunt, nihil blanditiis nemo quam velit aliquid minima eligendi nostrum iusto alias veniam porro amet excepturi autem voluptates est odio, facere in magnam quasi?\nRatione, eius qui minima error obcaecati cumque voluptatum.\nIste beatae quam ut.\nExpedita inventore nulla, harum unde soluta corporis doloribus blanditiis ipsum deserunt quaerat enim dicta nam asperiores consequuntur consequatur debitis cumque hic.\nMolestias id amet voluptate autem, soluta dignissimos minus dolore! Nemo commodi, quis veritatis cumque facilis labore facere rerum, soluta sapiente eos natus et illum.\nArchitecto quasi animi qui nisi, veritatis, eos, minima doloremque at perspiciatis quaerat exercitationem dolor! Facere aut sint porro enim rerum accusamus reprehenderit est exercitationem, odit ad ratione ea maxime fugit quia, adipisci iusto sed in! Aspernatur, tempore accusamus.\nVel corporis eligendi saepe nemo voluptates quisquam, modi repellendus amet perferendis libero alias quos optio, magni magnam similique! Hic nam velit quae dignissimos saepe ullam recusandae maiores facere minima quas ea, obcaecati voluptas harum veritatis dolor quasi excepturi nostrum tenetur error explicabo iusto soluta molestias maxime.\nIpsam totam, quisquam adipisci corporis amet maiores vero possimus accusamus magni suscipit consequatur nemo maxime inventore dolor, sapiente aliquid assumenda consequuntur animi iure dolores voluptatem optio?\nMinus quo nisi quibusdam eveniet at ducimus, dolore numquam magni.\nSimilique unde rem ut consequuntur eligendi illo voluptatibus reiciendis autem odit ratione facere sunt aliquid dolore qui optio at totam, amet delectus obcaecati reprehenderit debitis sapiente hic quidem! Soluta adipisci dignissimos eum magnam accusantium quaerat molestiae aliquid sed officia repellendus commodi pariatur tempora consequatur, dolorem autem fugit, quisquam architecto animi ratione non laudantium aliquam similique?\nPossimus, nemo saepe consequatur, voluptates iste sit ullam quo fuga ipsam quam animi?\nQuas vero laboriosam quis distinctio culpa dolor soluta et voluptatibus vel, dignissimos quasi fuga itaque quod deserunt ab accusamus dolores ipsam nobis inventore nostrum.\nFacere officia, animi, quaerat explicabo ut adipisci eligendi perferendis voluptatibus dolorum suscipit blanditiis, libero nam eos tenetur illo?\nDignissimos, vitae iusto.\nSint quas numquam itaque necessitatibus laboriosam.\nObcaecati ducimus modi ea saepe quisquam eum autem.\nAdipisci obcaecati harum, eius fugit veniam quas eligendi laboriosam quidem ipsa voluptate laborum maxime ipsum culpa expedita nisi omnis vel.\nSaepe officia, reiciendis molestias necessitatibus quia eveniet alias sequi cumque dicta animi enim consectetur magnam, qui porro aspernatur similique, nulla voluptatem laboriosam temporibus nihil sunt?\nMaxime ratione autem suscipit, officiis eius ad voluptatem minus officia provident quod atque dignissimos voluptates doloribus id odio non nostrum distinctio.\nOptio quae, temporibus quisquam iusto aut aperiam animi magnam aliquid consequatur repellendus aspernatur dolore delectus, excepturi similique, consequuntur deserunt harum tenetur laboriosam praesentium! Amet eaque beatae nostrum velit error labore consectetur consequuntur maiores excepturi quia tempora maxime harum tenetur, recusandae, possimus molestiae voluptatibus odio quas dolor ratione! Vero exercitationem dicta quibusdam laborum?\nOdio necessitatibus delectus blanditiis laboriosam ipsam sequi saepe quo non fugiat sapiente id magnam eum minus, pariatur facere!',
        language: 'plaintext',
        theme: 'vs-dark'
    });

    // Opens the search box at the beginning. 
    // TODO Do not change this functions place.
    // TODO It must be after the editor creation.
    editor.getAction('editor.action.startFindReplaceAction').run(editor, {
        seedSearchStringFromSelection: false,
        isRegex: true,
        matchCase: true,
    });

    // Dark mode theme switcher.
    darkMode.addEventListener('change', () => {
        if (darkMode.checked) {
            monaco.editor.setTheme('vs-dark');
        } else {
            monaco.editor.setTheme('vs');
        }
    });

    // Language Model selector.
    modelSelector.addEventListener('change', () => {
        monaco.editor.setModelLanguage(editor.getModel(), modelSelector.value);
    });

    // These elements & setings should be created after the searchbox created.
    //TODO do not change this functions place.
    const searchWidget = document.querySelector('.find-widget');
    const regexCheck = document.querySelector('[title="Use Regular Expression (⌥⌘R)"]');
    const findText = document.querySelector('[title="Find"]');
    searchWidget.style.position = "relative";
    searchWidget.classList.add("box-shadow-diff");
    searchWidget.style.left = "10px";
    searchWidget.style.width = "50%";


    // Save changes to the regex pattern for easy saving.
    findText.addEventListener('input', () => {
        regexPattern.value = findText.value;
    });

    //Automatically set regex search option when finder opened.
    const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });

    //Wait for the searchbox created.
    setTimeout(() => {
        regexCheck.dispatchEvent(event);
    }, 200);

    btnSaveRegex.addEventListener('click', () => {
        /*if (regexName.value === null ||
            regexName.value.trim() === "" ||
            regexPattern.value === null ||
            regexPattern.value.trim() === "") {
            alert("Please fill in the blanks.");
        } else {
            
        }*/
        console.log("clicked");
        initFileOperations();
        getSavedRegexes();
    });
});
