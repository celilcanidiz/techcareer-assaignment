package com.quizapp.dto;

import jakarta.persistence.ElementCollection;
import jakarta.validation.constraints.NotBlank;

import java.util.List;

public class QuestionSaveDto {

    private String question;
    private String subject;
    private String questionType;

    private List<String> choices;
    private List<String> correctAnswers;
}
