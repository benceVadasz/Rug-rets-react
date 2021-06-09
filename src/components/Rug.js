import React, {useState, useEffect, useRef} from 'react';

const Rug = ({file, onFill, fillColors}) => {
    const ImportedIconRef = useRef(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (file.length > 0) {
            setLoading(true);
            const importIcon = async () => {
                try {
                    const {default: namedImport} = await import(`../assets/rugShapes/${file}.js`);
                    ImportedIconRef.current = namedImport;
                } catch (err) {
                    throw err;
                } finally {
                    setLoading(false);
                }
            };
            importIcon();
        }
    }, [file]);

    if (!loading && ImportedIconRef.current) {
        const {current: ImportedIcon} = ImportedIconRef;
        return <ImportedIcon onFill={onFill} fillColors={fillColors}/>;
    }

    return null;

}

export default Rug;