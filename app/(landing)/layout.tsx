const LandingLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div className="h-full dark:bg-[#]">
            <div className="h-full pt-40">
                {children}
            </div>
        </div>
     );
}
 
export default LandingLayout;