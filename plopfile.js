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

            switch (data.dataConfig) {
                case 'component':
                    actions.push(
                        {
                            type: 'add',
                            path: 'components/{{ pascalCase elementName }}/{{ pascalCase elementName }}.tsx',
                            templateFile: 'generators/components/component.tsx.hbs'
                        },
                        {
                            type: 'add',
                            path: 'components/{{ pascalCase elementName }}/{{ pascalCase elementName }}.styles.ts',
                            templateFile: 'generators/components/component.ts.hbs'
                        },
                        {
                            type: 'add',
                            path: 'components/{{ pascalCase elementName }}/{{ pascalCase elementName }}.spec.tsx',
                            templateFile: 'generators/components/component.spec.hbs'
                        }
                    )
                    break;
                case 'layout':
                    actions.push(
                        {
                            type: 'add',
                            path: 'app/{{ kebabCase elementName }}/page.tsx',
                            templateFile: 'generators/page/page.tsx.hbs'
                        },
                        {
                            type: 'add',
                            path: 'lib/sanity/{{ kebabCase elementName }}.ts',
                            templateFile: 'generators/page/data.ts.hbs'
                        },
                        {
                            type: 'add',
                            path: 'layouts/{{ pascalCase elementName }}/{{ pascalCase elementName }}.tsx',
                            templateFile: 'generators/layouts/layout.tsx.hbs'
                        },
                        {
                            type: 'add',
                            path: 'layouts/{{ pascalCase elementName }}/{{ pascalCase elementName }}.styles.ts',
                            templateFile: 'generators/layouts/layout.ts.hbs'
                        }
                    )
                    break;
            }

            return actions;
        }
    });
};
