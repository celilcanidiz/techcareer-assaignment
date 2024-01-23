package com.quizapp.configuration;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration("gConfig")
public class GeneralConfig {

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}
