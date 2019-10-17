var app = {
    // Inicialização do jQuery, Firebase e Cordova (em breve)
    start: function(){
        console.log('1) Inicializando App...');

        $(document).ready(this.config); // Inicializando jQuery
    },

    // Configura o app
    config: function(){
        console.log('2) Configurando App...');

        // Configuração inicial local do App
        var config = conf.getAll(); // Obtém configurações
        if(!config) config = conf.reset(); // Se não existem, inicia com default
            
        // Configura jQuery AJAX CrossDomain para rotas no Android
		$.ajaxPrefilter( 'text html json script xml', function(options){
            options.crossDomain = true;
        });

        // Executa App
        app.run();
    },

    // Prepara e executa o app que está na função 'runApp()'
    run: function(){
        console.log('3) Executando o App...');

        // Aplicar tema pré-configurado
        $('main').attr('class', conf.get('tema'));

        // Executa tratamento de eventos
        runApp(); 
    }
}

function myApp(){

    // PÃ¡gina inicial
    $.get('pages/home.html', function(pageData){
        $('main').html(pageData);
    });

    // Roteamento
    $(document).on('click', 'a', function(){
        var href = $(this).attr('href');
        var target = $(this).attr('target');

        console.log(`${href} / ${target}`);

        if(href.substr(0,1) == '#'){
            var local = href.substr(1, href.lenght);
            local = `pages/${local}.html`;
            $.get(local, function(pageData){
                $('main').html(pageData);
            });
        } else {
            return true;
        }

        return false;
    });

}

$(document).ready(myApp);