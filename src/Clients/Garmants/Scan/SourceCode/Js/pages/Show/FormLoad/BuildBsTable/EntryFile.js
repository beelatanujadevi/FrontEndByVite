import optionsJson from './options.json' with {type: 'json'};


const StartFunc = () => {
    jFLocalInitialize().then();
};

const jFLocalInitialize = async () => {
    var $table = $('#table');

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };
