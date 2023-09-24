import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <p data-testid="value-title">value ={counterValue}</p>
            <Button
                onClick={increment}
                theme={ThemeButton.ACCENT}
                data-testid="increment-btn"
            >
                ++
            </Button>
            <Button
                onClick={decrement}
                theme={ThemeButton.ACCENT}
                data-testid="decrement-btn"
            >
                --
            </Button>
        </div>
    );
};
