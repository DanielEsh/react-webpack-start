const interfaceConst = 'interface'

export const componentTemplate = (componentName) => `
import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = (props: ${componentName}Props) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div>
            ${componentName}
        </div>
    );
};`
