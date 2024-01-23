package com.quizapp.ExceptionHandling;

public class BusineessException extends Exception{
    public BusineessException(String message){
        super(message);
    }

    public BusineessException(String message, Throwable throwable){
        super(message, throwable);
    }
}
