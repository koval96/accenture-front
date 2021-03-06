import React from 'react'

function Recommendation ({msg}) {
    return (
        <div className="col-6">
            <div className="defaultBox">
                <h2>
                    {msg == 1 &&
                        "Слишком большой показатель риска"
                    }

                    {/*{msg == 2 &&*/}
                    {/*"Показатель потенциальных потерь превысил, указанные вами лимит"*/}
                    {/*}*/}
                </h2>
                <p>
                    {msg == 1 &&
                    "Показатель риска не сходиться с вашим риск профилем. Мы советуем вам избавиться от некоторых рискованных активов"
                    }
                    {/*{msg == 2 &&*/}
                    {/*"Мы советуем вам избавиться продать самые "*/}
                    {/*}*/}
                    {msg == 3 && (
                        <p>Пока что рекомендаций нет</p>
                    )}
                </p>
            </div>
        </div>
    )
}

export default Recommendation
