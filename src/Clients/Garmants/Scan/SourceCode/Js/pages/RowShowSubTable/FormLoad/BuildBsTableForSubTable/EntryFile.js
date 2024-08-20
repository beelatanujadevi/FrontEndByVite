import optionsJson from './options.json' with {type: 'json'};

const StartFunc = () => {

    var $table = $(`#SubTableId`);
    $table.bootstrapTable(optionsJson);

};

export { StartFunc };
