module.exports = function (plop) {
    plop.setGenerator('controller', {
        description: 'application controller logic',
        prompts: [{
            type: 'list',
            name: 'dataConfig',
            message: 'What do you want to build?',
            choices: [
                { name: 'component', value: 'component' },
                { name: 'layout', value: 'layout' },
               ],
            },
            {
                type: 'input',
                name: 'elementName',
                message: 'Insert the name:',
            },
        ],
      
        actions: data => {
            let actions = []

            switch(data.dataConfig) {
                case 'component' :
                    actions.push(
                        {
                            type: 'add',
                            path: 'components/{{elementName}}/{{elementName}}.tsx',
                            templateFile: 'generators/components/component.tsx.hbs'
                        },
                        {
                            type: 'add',
                            path: 'components/{{elementName}}/{{elementName}}.styles.ts',
                            templateFile: 'generators/components/component.ts.hbs'
                        }
                    )
                break;
                case 'layout' :
                    actions.push(
                        {
                            type: 'add',
                            path: 'layouts/{{elementName}}/{{elementName}}.tsx',
                            templateFile: 'generators/layouts/layout.tsx.hbs'
                        },
                        {
                            type: 'add',
                            path: 'layouts/{{elementName}}/{{elementName}}.styles.ts',
                            templateFile: 'generators/layouts/layout.ts.hbs'
                        }
                    )
                break;
            }

            return actions;
        }
    });
};
