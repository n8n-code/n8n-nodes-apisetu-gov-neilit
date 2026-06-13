import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovNeilitApi implements ICredentialType {
        name = 'N8nDevApisetuGovNeilitApi';

        displayName = 'Apisetu Gov Neilit API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovNeilit/apisetu-gov-neilit.svg', dark: 'file:../nodes/ApisetuGovNeilit/apisetu-gov-neilit.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/neilit/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/neilit/v3',
                        description: 'The base URL of your Apisetu Gov Neilit API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
