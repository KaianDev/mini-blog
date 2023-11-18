const SpinLoading = () => {
    return (
        <div className="flex items-center w-full justify-center">
            <div className="mr-2 border-4 border-r-blue-500 border-b-blue-500 rounded-full animate-spin w-8 h-8"></div>
            Carregando...
        </div>
    );
};

export default SpinLoading;
