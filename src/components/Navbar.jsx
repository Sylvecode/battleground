
function Navbar() {
    return (
        <div className="flex justify-center items-center h-30 w-screen bg-gradient-to-r from-red-500 to-orange-500">
            <ul className="flex flex-row gap-10 text-dark">
            <li className="bg-blue-600">Accueil</li>
            <li>Combattre</li>
            <li>Classement</li>
            <li>Boutique</li>
            <li>Mon espace</li>
            </ul>
        </div>
    )
}





export default Navbar;