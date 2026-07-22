interface ButtonProps {
    children: React.ReactNode; //significa que o componente Button pode receber qualquer tipo de conteúdo como filho, seja texto, elementos JSX ou outros componentes.
    variant?: 'primary' | 'secondary'; //significa que o componente Button pode receber uma propriedade opcional chamada variant, que pode ser 'primary' ou 'secondary'. Isso permite que você defina diferentes estilos para o botão com base no valor dessa propriedade.
    size?: 'sm' | 'md' | 'lg'; //significa que o componente Button pode receber uma propriedade opcional chamada size, que pode ser 'sm', 'md' ou 'lg'. Isso permite que você defina diferentes tamanhos para o botão com base no valor dessa propriedade.
}

export const Button = ({children, variant = 'primary', size = 'md'}: ButtonProps) => {

    const buttonStyles = {
        base: 'flex justify-center items-center gap-2 text-nowrap leading-none hover:cursor-pointer transition-colors duration-200 font-medium rounded-full transition py-2.5',
        variant: {
            primary: 'bg-white text-[#6329A2] hover:bg-gray-100',
            secondary: 'bg-transparent border border-white text-white hover:bg-white hover:text-black'
        },
        size: {
            sm: 'px-5',
            md: 'px-8',
            lg: 'px-10'
        },
    };

    const className = `${buttonStyles.base} ${buttonStyles.variant[variant]} ${buttonStyles.size[size]}`;

    return (
        <button className={className}>{children}</button>
    );
};